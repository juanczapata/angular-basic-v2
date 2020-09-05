import { Component, OnInit } from '@angular/core';

export interface Product {
  id:number;
  description:string;
  price:number;
  category:string;
}

@Component({
  selector: 'app-main-item-grid',
  templateUrl: './main-item-grid.component.html',
  styleUrls: ['./main-item-grid.component.css']
})
export class MainItemGridComponent implements OnInit {
  products: Product[] = [
    {id: 1, description: "Pie de Limon", price:5.0, category: "dessert"},
    {id: 2, description: "Cheesecake de Fresa", price:5.0, category: "dessert"},
    {id: 3, description: "Taza de café", price:2.0, category: "drink"},
    {id: 4, description: "Jugo de Naranja", price:3.0, category: "drink"},
    {id: 5, description: "Pizza - Personal", price:8.0, category: "fast-food"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
