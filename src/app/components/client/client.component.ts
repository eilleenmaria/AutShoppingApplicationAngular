import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  quiereContact =false ;
  clientForm:FormGroup;

  constructor(private toastr: ToastrService, private _myroute : Router) { this.clientForm = new FormGroup({
    name: new FormControl ('', Validators.required),
    password:new FormControl ('', Validators.required),
    email: new FormControl (''),
    phoneNumber:  new FormControl (''),

  })
}

register(){
  this.toastr.success('In construction!');
  this._myroute.navigate( ["/listCar"] );
}

ngOnInit(): void {
}




}
