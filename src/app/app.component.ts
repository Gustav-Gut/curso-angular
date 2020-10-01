import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string;

  constructor() { 
    var cadena: string = '1234';
    console.log('constructor app-component');
  }

  ngOnInit() {
    this.title = 'Título componente padre';
    console.log('onInit app-component --> ', this.title);
  }

  

}
