import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Movie } from './Interfaces/movie';
import { MovieService } from './Services/movie.service';

import {MatDialog} from '@angular/material/dialog';

import { AddMovieComponent } from './modals/add-movie/add-movie.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['Id', 'Director', 'Gener', 'Year', 'Duration', 'Synopsis','Acciones'];
  dataSource = new MatTableDataSource<Movie>();
  constructor(
    private  _movieServicio:MovieService,
    public dialog: MatDialog
  ) {

  }
  
  ngOnInit():void{
    this.mostrarMovies();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarMovies() {
    this._movieServicio.listMovies().subscribe({
      next:(dataResponse) => {
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      },error:(e) =>{}
    })
     
  }

  openDialog() {
    this.dialog.open(AddMovieComponent);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
