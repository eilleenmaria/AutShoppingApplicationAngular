import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


import { config } from 'rxjs';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
  
})
export class CarouselBasicComponent implements OnInit  {

  carImage:any[] =[
    {name: 'with your new car AutShopping ',
    img: 'assets/sliderCar/lamborghini.jpg',
    desc: '¡Enjoy your best moments! '
  },
  {name: 'Fortuner sp-4 ',
     img: 'assets/sliderCar/mclaren.jpg',
     desc: '... elegance and confort. '
 }]
 
  constructor(private _config:NgbCarouselConfig){
    _config.interval = 2000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }
  ngOnInit() { }

}
