import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-sidebars',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './sidebars.component.html',
  styleUrl: './sidebars.component.css'
})
export class SidebarsComponent {

}
