import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-delete-pet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-pet.component.html',
  styleUrl: './delete-pet.component.css'
})
export class DeletePetComponent {
  animalId: number | undefined; 
  name: string | undefined;
  successMessage: string | undefined;

  constructor(private http: HttpClient) {}

  deletePet() {
    // Verifica se o animalId e o nome estão definidos
    if (this.animalId && this.name) {
      // Passando os parâmetros na query string como esperado pela API
      this.http.delete(`http://localhost:3000/dados?animalId=${this.animalId}&name=${this.name}`)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Pet excluído com sucesso!';
            // Limpa os campos após a exclusão
            this.animalId = undefined;
            this.name = undefined;
          },
          error: (error) => {
            console.error('Erro ao excluir o pet:', error);
            this.successMessage = 'Erro ao excluir o pet. Tente novamente.';
          }
        });
    } else {
      this.successMessage = 'Por favor, preencha todos os campos.';
    }
  }
}