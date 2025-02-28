import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'; // ✅ Import FormsModule
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchBoxComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  handleSearch(query: string) {
    console.log('Searching for:', query);
    // Call API to fetch GitHub users or repositories
  }
}
