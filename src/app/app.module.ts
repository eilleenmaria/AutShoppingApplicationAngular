import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { far} from '@fortawesome/free-regular-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AddCarComponent } from './components/add-car/add-car.component';
import { ClientComponent } from './components/client/client.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { CarouselBasicComponent } from './components/carousel-pause/carousel-basic.component';
import { PipesPipe } from './pipes/pipes.pipe';
import { PhotoBase64Component } from './components/photo-base64/photo-base64.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    ClientComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListCarComponent,
   CarouselBasicComponent,
    PipesPipe,
    PhotoBase64Component,
    EditCarComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  
  ],
 
  exports: [PhotoBase64Component, ],
  bootstrap: [AppComponent,]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks( fas);
  }
  
 }
