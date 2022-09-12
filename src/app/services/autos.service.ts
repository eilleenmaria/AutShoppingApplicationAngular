import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Car } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  url= 'http://localhost:4000/api/car/';
  
  constructor(private http:HttpClient ) { }
  getCars():Observable<any>{
    return this.http.get(this.url);
  }
  deleteCar(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }
  saveCar(car:Car):Observable<any>{
    return this.http.post(this.url, car);
  }
  obtainCar(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }
  editCar(id:string, car:Car):Observable<any>{
    return this.http.post(this.url + id, car);
  }
}

