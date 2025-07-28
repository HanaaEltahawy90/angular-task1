import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
    @HostListener('window:click', ['$event'])

  isHidden: boolean = true;
  flag=true;
  modelImg: string = '';

  imgsrc: string[] = [
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
  ];
  openModal(event: MouseEvent, src: string) {
  event.stopPropagation(); 
  this.modelImg = src;
  this.isHidden = false;
}

@HostListener('window:click', ['$event'])
onWindowClick(event: MouseEvent) {
  this.isHidden = true;
}

}
