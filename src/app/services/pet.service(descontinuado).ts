import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:3000/api/pets';

  constructor(private http: HttpClient) {}

  // Listar todos os pets
  getPets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Adicionar um novo pet
  addPet(pet: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pet);
  }

  // Atualizar um pet
  updatePet(id: string, pet: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, pet);
  }

  // Deletar um pet
  deletePet(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
