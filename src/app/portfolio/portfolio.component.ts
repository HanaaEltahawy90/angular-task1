import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isHidden:boolean =true;
modelImg:string ='';

imgsrc:string[]=[
  '/img/poert1.png',
  '/img/port2.png',
  '/img/port3.png',
  '/img/poert1.png',
  '/img/port2.png',
  '/img/port3.png',
];





}
  


