import { Component } from '@angular/core';
import { SearchBoxComponent } from '../components/search-box/search-box.component';

@Component({
  selector: 'app-home',
  imports: [SearchBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
