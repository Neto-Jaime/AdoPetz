import { Component } from '@angular/core';
import { SidebarsComponent } from '../sidebars/sidebars.component';

@Component({
  selector: 'app-filter-pets',
  standalone: true,
  imports: [SidebarsComponent],
  templateUrl: './filter-pets.component.html',
  styleUrl: './filter-pets.component.css'
})
export class FilterPetsComponent {
  // implementar logica para filtar pets
}
