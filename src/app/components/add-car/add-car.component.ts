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
  image:any= "../../../assets/fotoimage.jpg"
  file: any;
  id : string | null;
  constructor(private toastr: ToastrService,
    private router:Router , private _carService: AutosService, private aRouter: ActivatedRoute) {
      
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }


  ngOnInit(): void {
    this.carForm = new FormGroup({
      name:new FormControl (null, Validators.required),
      brand: new FormControl (null, Validators.required),
      model: new FormControl ( null, Validators.required),
      category:new FormControl (null, Validators.required),
      characteristics: new FormControl (null, Validators.required),
      motor: new FormControl (null, Validators.required),
      price: new FormControl (null, Validators.required),
      file: new FormControl (null,Validators.required),
      
    });
    this.isUpdate();
  }
  fileChangeEvent(event){
    if(event.target.files && event.target.files.length>0){
      const file = event.target.files[0];
      if(file.type.includes('image')){
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onload = function load(){
          this.image = reader.result;
        }.bind(this);
        this.file = file;
      }else{
        console.log("There was an error")
      }
    }
  }
  
  addCar(){
    const form = this.carForm;
        if(form.valid){
          this._carService.uploadCar(
            form.value.name,
            form.value.brand,
            form.value.model,
            form.value.category,
            form.value.characteristics,
            form.value.motor,
            form.value.price,
            this.file
          ).subscribe(data =>{
            this.carForm = new FormGroup({
              name:new FormControl (null ),
              brand: new FormControl (null ),
              model: new FormControl ( null),
              category:new FormControl (null ),
              characteristics: new FormControl (null),
              motor: new FormControl (null),
              price: new FormControl (null),
              file: new FormControl (null),
              
            })
            this.image ="../../../assets/foto.png" ;
          })
        }
        console.log(this.carForm);
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
                file: data.file,
              })
            ))
          }
        }
      
    // const CAR:Car = {
    //   name: this.carForm.get('name')?.value,
    //   brand: this.carForm.get('brand')?.value,
    //   model: this.carForm.get('model')?.value,
    //   category:this.carForm.get('category')?.value,
    //   characteristics: this.carForm.get('characteristics')?.value,
    //   motor: this.carForm.get('motor')?.value,
    //   price: this.carForm.get('price')?.value,
    //   importFile: this.carForm.get('importFile')?.value,
    //}
    // console.log(this.carForm.get('importFile')?.value);
    // console.log(this.carForm.get('importFile'));
   
    // console.log(this.carForm);
  //   if(this.id !== null){
  //     // edit car
  //     this._carService.editCar(this.id, CAR).subscribe(data =>{
  //         this.toastr.success('Car updated successfully', 'Updated car!');
  //         this.router.navigate(['/listCar']);
  //       },error =>{
  //         console.log(error);
  //         this.carForm.reset();
  //     })
  //   }else{
  //     console.log(CAR);
  //     this._carService.saveCar(CAR).subscribe( data =>{
  //     this.toastr.success('Successful registration', 'Registered car!');
  //     this.router.navigate(['/listCar']);
  //   },error =>{
  //     console.log(error);
  //     this.carForm.reset();
  //   })
  //     // add car
  //   }
    
    
  // }
  // isUpdate(){
  //   if(this.id !== null){
  //     this.titulo = 'Edit car';
  //     this._carService.obtainCar(this.id).subscribe(data =>(
  //       this.carForm.setValue({
  //         name: data.name,
  //         brand: data.brand,
  //         model: data.model,
  //         category:data.category,
  //         characteristics: data.characteristics,
  //         motor: data.motor,
  //         price: data.price,
  //         importFile: data.importFile,
  //       })
  //     ))
  //   }
    
  // }
}
