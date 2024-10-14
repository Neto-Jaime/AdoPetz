import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adicione esta linha

export interface Animal {
  animalId: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  description: string;
  image?: string;      // Propriedade opcional
  adopted?: boolean;   // Propriedade opcional
}

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private apiUrl = `${environment.apiUrl}/dados`; // Use a URL do ambiente

  constructor(private http: HttpClient) {}

  // Método para adicionar um novo animal
  addAnimal(animal: Animal): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(animal), { headers });
  }

  // Método para obter todos os animais
  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  // Método para excluir um animal pelo ID
  deleteAnimal(id: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }
}
