import { Component, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CarouselComponent) myCarousel: CarouselComponent;
  name = 'Angular';
  masterArray = ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg',
  ];
  imagesArray = ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
  ];
  loopcomplete: boolean = false;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
  activeRange = 0;
  array:any[];

  constructor() { }

  gotRangeChange() {
    if (!this.loopcomplete) {
      this.array = this.masterArray.slice(0,3);
      // this.array = this.masterArray[2];
      // this.array = this.masterArray[1];
      console.log(this.array);

      if (this.activeRange + 3 < this.masterArray.length) {
        this.activeRange = this.activeRange + 3;
        this.array = this.array.concat(this.masterArray[this.activeRange]);
        this.array = this.array.concat(this.masterArray[this.activeRange + 1]);
      } else {
        this.loopcomplete = true;
      }
    }

  }

}