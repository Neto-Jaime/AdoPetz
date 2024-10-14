import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DeletePetComponent } from './delete-pet/delete-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

// Define as rotas da aplicação
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetListComponent },
  { path: 'dados', component: AddPetComponent },
  { path: 'delete', component: DeletePetComponent },
  { path: 'update', component: UpdatePetComponent },
];



// Cria um módulo de rotas e exporta
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
