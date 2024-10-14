import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRouterModule } from './app.routes'; 
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './pet-list/pet-list.component'; 
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddPetComponent } from './add-pet/add-pet.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    AppRouterModule, 
    HttpClientModule,
    FormsModule, 
    CommonModule,
  
    
  ],

  providers: [],
   

  
})
export class AppModule { }
