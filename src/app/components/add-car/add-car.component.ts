import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/cart';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutosService } from 'src/app/services/autos.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carForm: FormGroup;
  titulo = 'Add Car';
  id : string;
  constructor(private toastr: ToastrService,
    private router:Router , private _carService: AutosService, private aRouter: ActivatedRoute) {
      this.carForm = new FormGroup({
        name:new FormControl ('', Validators.required),
        brand: new FormControl ('', Validators.required),
        model: new FormControl ( '', Validators.required),
        category:new FormControl ('', Validators.required),
        characteristics: new FormControl ('', Validators.required),
        motor: new FormControl ('', Validators.required),
        price: new FormControl ('', Validators.required),
        importFile: new FormControl ('',Validators.required),
        
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.isUpdate();
  }
  addCar(){
    // const CAR:Car ={
    //   name:this.
    // }
    console.log(this.carForm);
    console.log(this.carForm.get('importFile')?.value);
   
    const CAR:Car = {
      name: this.carForm.get('name')?.value,
      brand: this.carForm.get('brand')?.value,
      model: this.carForm.get('model')?.value,
      category:this.carForm.get('category')?.value,
      characteristics: this.carForm.get('characteristics')?.value,
      motor: this.carForm.get('motor')?.value,
      price: this.carForm.get('price')?.value,
      importFile: this.carForm.get('importFile')?.value,
    }
    if(this.id !== null){
      // edit car
      this._carService.editCar(this.id, CAR).subscribe(data =>{
          this.toastr.success('Car updated successfully', 'Updated car!');
          this.router.navigate(['/listCar']);
        },error =>{
          console.log(error);
          this.carForm.reset();
      })
    }else{
      console.log(CAR);
      this._carService.saveCar(CAR).subscribe( data =>{
      this.toastr.success('Successful registration', 'Registered car!');
      this.router.navigate(['/listCar']);
    },error =>{
      console.log(error);
      this.carForm.reset();
    })
      // add car
    }
    
    
  }
  isUpdate(){
    if(this.id !== null){
      this.titulo = 'Edit car';
      this._carService.obtainCar(this.id).subscribe(data =>(
        this.carForm.setValue({
          name: data.name,
          brand: data.brand,
          model: data.model,
          category:data.category,
          characteristics: data.characteristics,
          motor: data.motor,
          price: data.price,
          importFile: data.importFile,
        })
      ))
    }
    
  }
}
