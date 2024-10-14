import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-pet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-pet.component.html',
  styleUrl: './update-pet.component.css'
})
export class UpdatePetComponent {
  animalId: number | undefined; // ID do animal a ser atualizado
  name?: string;      // Novos dados que podem ser atualizados
  species?: string;
  breed?: string;
  age?: number;
  description?: string;
  successMessage?: string;

  constructor(private http: HttpClient) {}

  updatePet() {
    if (this.animalId) {
      const updates = {
        name: this.name,
        species: this.species,
        breed: this.breed,
        age: this.age,
        description: this.description
      };

      this.http.put(`http://localhost:3000/dados/${this.animalId}`, updates)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Pet atualizado com sucesso!';
            // Limpar os campos após a atualização
            this.animalId = undefined;
            this.name = undefined;
            this.species = undefined;
            this.breed = undefined;
            this.age = undefined;
            this.description = undefined;
          },
          error: (error) => {
            console.error('Erro ao atualizar o pet:', error);
            this.successMessage = 'Erro ao atualizar o pet. Tente novamente.';
          }
        });
    } else {
      this.successMessage = 'Por favor, insira o ID do animal.';
    }
  }
}