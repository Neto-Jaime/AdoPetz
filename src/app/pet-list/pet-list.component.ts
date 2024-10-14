import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarsComponent } from '../sidebars/sidebars.component';
import { AnimalService, Animal } from '../services/animal.service';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, SidebarsComponent],
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: Animal[] = []; 

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.getAnimals().subscribe(
      (animals: Animal[]) => {
        this.pets = animals;
        console.log('Animais recebidos:', this.pets);
      },
      (error) => {
        console.error('Erro ao obter animais:', error);
      }
    );
  }
}
