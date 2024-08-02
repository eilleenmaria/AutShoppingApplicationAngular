import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/cart';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carForm: FormGroup;
  titulo = 'Edit Car';
  //image:any= "../../../assets/fotoimage.jpg"
  //file: any;
  loading = false;
  
  
  id : string | null;
  constructor(private toastr: ToastrService,
              private router:Router , 
              private _carService: AutosService, 
              private aRouter: ActivatedRoute) {

                this.carForm = new FormGroup({
                  name:new FormControl (null, Validators.required),
                  brand: new FormControl (null, Validators.required),
                  model: new FormControl ( null, Validators.required),
                  category:new FormControl (null, Validators.required),
                  characteristics: new FormControl (null, Validators.required),
                  motor: new FormControl (null, Validators.required),
                  price: new FormControl (null, Validators.required),
                  //file: new FormControl (null,Validators.required),
                  
                });
      
      this.id = this.aRouter.snapshot.paramMap.get('id');

     }


  ngOnInit(): void {
   
     this.isUpdate();
  }
  

  // fileChangeEvent(event){
  //   if(event.target.files && event.target.files.length>0){
  //     const file = event.target.files[0];
  //     if(file.type.includes('image')){
  //       const reader = new FileReader()
  //       reader.readAsDataURL(file);
  //       reader.onload = function load(){
  //         this.image = reader.result;
  //       }.bind(this);
  //       this.file = file;
  //     }else{
  //       console.log("There was an error")
  //     }
  //   }
  // }
  updateCar(id: string){
    const car: Car = {
      name: this.carForm.get('name')?.value,
      brand: this.carForm.get('brand')?.value,
      model: this.carForm.get('model')?.value,
      category: this.carForm.get('category')?.value,
      characteristics: this.carForm.get('characteristics')?.value,
      motor: this.carForm.get('motor')?.value,
      price: this.carForm.get('price')?.value,
      file: this.carForm.get('file')?.value,
    }
       this.loading = true;
        this._carService.editCar(id,car
      ).subscribe(data =>{
        this.loading = false;
        this.toastr.info('Car updated successfully', 'Updated car!', {
          positionClass: 'toast-bottom-right'
        })
        this.router.navigate(['/listCar']);
      },error => {
        console.log(error);
        this.carForm.reset();
        this.loading = false;
      }
    )
  }      

  isUpdate(){
    this.titulo = 'Edit car';
      if(this.id !== null){
        this.loading = true;
        this._carService.obtainCar(this.id).subscribe(data =>{
          this.loading = false;
          this.carForm.setValue({
            name: data.name,
            brand: data.brand,
            model: data.model,
            category:data.category,
            characteristics: data.characteristics,
            motor: data.motor,
            price: data.price,
                       
          })          
        })        
      }
    
    }  
}
