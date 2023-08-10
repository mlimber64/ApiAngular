import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private endPoint = environment.endPoint;
  private apirUrl = this.endPoint;

  constructor(private http:HttpClient) { }

  listMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apirUrl);
  }

  AddMovies(modelo:Movie):Observable<Movie>{
    return this.http.post<Movie>('${this.apiUrl}',modelo);
  }

  UpdateMovies(modelo:Movie):Observable<Movie>{
    return this.http.put<Movie>('${this.apiUrl}/${id}',modelo);
  }

  DeleteMovies(modelo:Movie):Observable<void>{
    return this.http.delete<void>('${this.apiUrl}/${id}');
  }

}
