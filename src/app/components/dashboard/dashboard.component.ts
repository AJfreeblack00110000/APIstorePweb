import { Component,Directive, inject, Injectable, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';;
/* Importamos la librería HttpClient */
import { HttpClient } from '@angular/common/http';
/* Importamos nuestro modelo*/
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  http = inject(HttpClient);
  /* Un array que almacenará los productos*/
  products: Product[] = [];

  url_api = "https://fakestoreapi.com/products";

  ngOnInit(){ //Este método se ejecuta automáticamente al cargar la APP
    this.loadProducts();
  }

  /*Creamos una función para que cargue los productos desde la API*/
  loadProducts(){
    //Filtra los datos que devuelv el observable
    this.http.get<Product[]>(this.url_api).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 2', cols: 2, rows: 2 }
        ];
      }

      return [

        { title: 'Card 2', cols: 2, rows: 2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
