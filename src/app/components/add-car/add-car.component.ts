import { Component, OnInit, } from '@angular/core';
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
  loading = false;
  
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
  addEditCar(){
    
    if (this.id === null){
      this.addCar();
    }else{
      this.editCar(this.id);
    }
  }
 
  
  addCar(){
    const form = this.carForm;
        if(form.valid){
          this.loading = true;
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
            this.toastr.success('Successful registration', 'Registered car!');
            this.loading = false;
      this.router.navigate(['/listCar']);
    },error => {
      console.log(error);
      this.carForm.reset();
      this.loading = false;
    })
            
        }
        console.log(this.carForm);
      } 

      editCar(id: string){
        const form = this.carForm;
        if(form.valid){
            form.value.name,
            form.value.brand,
            form.value.model,
            form.value.category,
            form.value.characteristics,
            form.value.motor,
            form.value.price,
            this.file
          }
            this.loading = true;
            this._carService.editCar(id,form
          ).subscribe(data =>{
            this.loading = false;
            this.toastr.info('Car updated successfully', 'Updated car!', {
              positionClass: 'toast-bottom-right'
            })
            this.router.navigate(['/listCar']);
          })
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
                file: data.file,
              })
            })
          }
        }  
}
