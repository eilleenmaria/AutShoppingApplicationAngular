import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { ListCarComponent} from './components/list-car/list-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import {  ClientComponent} from './components/client/client.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'addCar', component: AddCarComponent },
  { path: 'editCar/:id', component: EditCarComponent },
  { path: 'listCar', component: ListCarComponent },
  { path: 'registerCar', component: ClientComponent },
  { path: '**', redirectTo:'home', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
