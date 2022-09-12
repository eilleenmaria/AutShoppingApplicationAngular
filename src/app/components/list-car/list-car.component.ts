import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service'; 
import { Car } from 'src/app/models/cart';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  listCar : Car[] =[];
  constructor(private _carService: AutosService, private toastr: ToastrService) {
    this.obtainCars();
   }
  filterPost = '';
  ngOnInit(): void {
  }
  obtainCars(){
    this._carService.getCars().subscribe(data =>{
      console.log(data);
      0
      this.listCar = data;      
    },error => {
      console.log(error);
    })
  }

  deleteCar(id:any){
    this._carService.deleteCar(id).subscribe(data =>{
      this.toastr.error('the car had delete');
      this.obtainCars();
    },error=>{console.log(error);
    
    })
  }
}


