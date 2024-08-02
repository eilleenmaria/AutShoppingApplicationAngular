import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service'; 
import { Car } from 'src/app/models/cart';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  seeImage:boolean=false;
  listCar : Car[] =[];
  url:string = 'https://backendautshopping.onrender.com/';
  constructor(private _carService: AutosService, private toastr: ToastrService,  private _myroute : Router) {
    // this.obtainCars();
   }
  filterPost = '';
  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this._carService.getCars().subscribe({
      next: (data) =>{
        console.log(data);
        this.listCar = data;
      },
      error:(e) => console.error(e)
    })
    // this._carService.getCars().subscribe(data =>{
        
    //   console.log(data);
    
    //   this.listCar = data;          
    // },error => {
    //   console.log(error);
    // })
  }
  

  deleteCar(id:any){
    this._carService.deleteCar(id).subscribe(data =>{
      this.toastr.error('the car has been deleted');
      this.getCars();
    },error=>{console.log(error);
    
    })
  }
  goAdd(){
   this._myroute.navigate(["/addCar"]);
  }
  viewImage():void{
    this.seeImage = !this.seeImage;
  }
  
}


