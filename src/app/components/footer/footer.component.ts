import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _myRouter: Router) { 
    
  }
  goHome(){
    this._myRouter.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}
