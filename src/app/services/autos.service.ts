import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Car } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  url= 'http://localhost:4000';
  
  constructor(private http:HttpClient ) { }
  getCars():Observable<any>{
    return this.http.get(`${this.url}/view`);
  }
  uploadCar(name: string, brand: string, model: string,
    category:string, characteristics: string, motor: string,
    price: string, file: File):Observable<object>{
      const form = new FormData()
      form.append('name',name);
      form.append('brand',brand);
      form.append('model',model);
       form.append('category',category);
      form.append('characteristics',characteristics);
      form.append('motor',motor);
      form.append('price',price);     
      form.append('file',file,'form-data');
      return this.http.post<object>(`${this.url}/car`,form);
    }
  deleteCar(id:string):Observable<object>{
    return this.http.delete<object>(`${this.url}/delete/${id}`);
  }
  // saveCar(car:Car):Observable<any>{
  //   return this.http.post(this.url, car);
  // }
  obtainCar(id: string):Observable<any>{
    return this.http.get(`${this.url}/onecar/${id}`);
  }
  editCar(id:string, car:Car):Observable<object>{
    return this.http.post<object>(`${this.url}/update/${id}`, car);
  }
}

