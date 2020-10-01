import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  public subTitle: string;

  constructor() { 
    console.log('constructor xyz');
  }

  ngOnInit() {
    console.log('ngOnInit xyz');
    this.subTitle = "Subtitulo de xyz!!!"
  }

}
