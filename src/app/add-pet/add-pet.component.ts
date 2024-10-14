import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AnimalService, Animal } from '../services/animal.service';
import { environment } from '../../environments/environment'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-add-pet',
  standalone: true,
  templateUrl: './add-pet.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  selectedFile: File | null = null;  // Armazena o arquivo selecionado
  pet: Animal = {  // Inicializando o objeto pet
    name: '',
    species: '',
    breed: '',
    age: 0,
    description: '',
    animalId: 0,
    image: ''
  };
  message: string = '';

  constructor(private http: HttpClient, private animalService: AnimalService) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit(): void {
    if (!this.selectedFile || !this.pet.name || !this.pet.species || !this.pet.breed || this.pet.age <= 0) {
      this.message = 'Por favor, preencha todos os campos e selecione uma foto para o pet.';
      return;
    }

    const formData = new FormData();
    formData.append('name', this.pet.name);
    formData.append('species', this.pet.species);
    formData.append('breed', this.pet.breed);
    formData.append('age', String(this.pet.age));
    formData.append('description', this.pet.description);
    formData.append('image', this.selectedFile);  // Adiciona o arquivo ao formData

    // Faz a requisição POST para o backend com o FormData
    this.http.post(`${environment.apiUrl}/dados`, formData)
    .subscribe({
      next: (response) => {
        this.message = 'Pet cadastrado com sucesso!';
        console.log('Resposta do servidor:', response);
      },
      error: (error) => {
        this.message = 'Erro ao cadastrar o pet.';
        console.error('Erro:', error);
      }
    });
  }

  addNewAnimal(): void {
    if (this.selectedFile && this.pet.name && this.pet.species && this.pet.breed && this.pet.age > 0) { 
      const formData = new FormData();
      
      // Adiciona os dados do pet
      formData.append('name', this.pet.name);
      formData.append('age', this.pet.age.toString());
      formData.append('breed', this.pet.breed);
      formData.append('species', this.pet.species);
      formData.append('description', this.pet.description);
      
      // Adiciona a foto do pet
      formData.append('image', this.selectedFile);
  
      // Envia os dados para o backend usando a URL do ambiente
      this.http.post(`${environment.apiUrl}/dados`, formData)
        .subscribe({
          next: (response) => {
            this.message = 'Pet cadastrado com sucesso!';
            console.log('Resposta do servidor:', response);
          },
          error: (error) => {
            this.message = 'Erro ao cadastrar o pet.';
            console.error('Erro:', error);
          }
        });
    } else {
      this.message = 'Por favor, preencha todos os campos e selecione uma foto para o pet.';
    }
  }
}
