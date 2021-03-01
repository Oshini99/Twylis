import { Component } from '@angular/core';  

@Component({  
  selector: 'material-dashboard',  
  templateUrl: './material-dashboard.component.html',  
  styleUrls: ['./material-dashboard.component.css']  
})  
export class MaterialDashboardComponent {  

  // Number of cards to be generated with column and rows to be covered  
  cards = [  
    { title: 'Card 1', cols: 2, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 2 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];  
}  
