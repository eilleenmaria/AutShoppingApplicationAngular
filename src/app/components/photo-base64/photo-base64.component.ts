import { Component, OnInit, forwardRef, Input, } from '@angular/core';
import * as _ from 'lodash';
import {FormControl,NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-photo-base64',
  templateUrl: './photo-base64.component.html',
  styleUrls: ['./photo-base64.component.css'],
  providers: [
   {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => PhotoBase64Component),
     multi: true
   }
 ]

})
export class PhotoBase64Component implements ControlValueAccessor {
  @Input() type = 'file';
  @Input() isReadOnly = false;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  file:any;
  
  
  control: FormControl;
  private innerValue: any;
  get value(){
   return this.innerValue
  }
  set value(v:any){
   if(v !== this.innerValue){
      this.innerValue=v;
      this.onChangeCd(v);
   }
  }
  

  constructor() { }

  onChangeCd : (_:any) => void = () => {};
  onTouchCd : (_:any) => void = () => {};

  writeValue(v: any): void{
    this.value=v;
    }
  registerOnChange(fn: any): void{
    this.onChangeCd= fn;
  }
  registerOnTouched(fn: any): void{
    this.onTouchCd = fn;
  }
  setDisabledState?(isDisabled: boolean): void{
    this.isReadOnly = isDisabled;
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.file = <File>fileInput.target.files[0];
       // Size Filter Bytes
       const max_size = 20971520;
       const allowed_types = ['image/png', 'image/jpeg'];
       const max_height = 15200;
       const max_width = 25600;

       if (fileInput.target.files[0].size > max_size) {
          this.imageError =
             'Maximum size allowed is ' + max_size / 1000 + 'Mb';

          return false;
       }

       if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
          this.imageError = 'Only Images are allowed ( JPG | PNG )';
          return false;
       }
       const reader = new FileReader();
       reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
             const img_height = rs.currentTarget['height'];
             const img_width = rs.currentTarget['width'];

             console.log(img_height, img_width);

             if (img_height > max_height && img_width > max_width) {
                this.imageError =
                   'Maximum dimentions allowed ' +
                   max_height +
                   '*' +
                   max_width +
                   'px';
                return false;
             } else {
                const imgBase64Path = e.target.result;
                this.cardImageBase64 = imgBase64Path;
                this.isImageSaved = true;
                // this.previewImagePath = imgBase64Path;
             }
          };
       };
       
       reader.readAsDataURL(this.file);
       
       }
 }

 removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
 }

}

