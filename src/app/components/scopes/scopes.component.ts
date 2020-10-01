import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.css']
})
export class ScopesComponent implements OnInit {

  public name: string = 'Juan';
  public lastName: string = 'Perez';
  public age: number = 28;

  constructor() {
    let name: string;
    let lastName: string
    let age: number;
    name = 'Gustavo';
    lastName = 'Gutierrez';
    age = 33;
    console.log('constructor scopes -->', name + ' ' + lastName + ' ' + age);

  }

  ngOnInit() {
    const name: any = 'Luis';
    const lastName: any = 'Gonzalez';
    const age: any = 20;
    console.log('ngOnInit scopes local-->', name + ' ' + lastName + ' ' + age);
    console.log('ngOnInit scopes global-->', this.name + ' ' + this.lastName + ' ' + this.age);
    if (name == 'Luis') {
      const name = 'Pedro';
      console.log('en if -->',name);
    }
    console.log('fuera if -->',name);
  }

  getName(): any {
    let name: string = 'pedro';
    return this.name + ' ' + this.lastName + ' ' + this.age;
  }

}
