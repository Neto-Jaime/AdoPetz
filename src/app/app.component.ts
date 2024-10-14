import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetListCarrosselComponent } from "./pet-list-carrossel/pet-list-carrossel.component";
import { FooterPageComponent } from "./footer-page/footer-page.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FilterPetsComponent } from "./filter-pets/filter-pets.component";
import { HowWorksComponent } from "./how-works/how-works.component";
import { AddPetComponent } from "./add-pet/add-pet.component";
import { SidebarsComponent } from "./sidebars/sidebars.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet,RouterLink, HeaderComponent, HomeComponent, PetListComponent, PetListCarrosselComponent, FooterPageComponent, HeroSectionComponent, FilterPetsComponent, HowWorksComponent, AddPetComponent, SidebarsComponent]
})
export class AppComponent {
  title = 'AdoPetz';
}
