import { Component, signal } from '@angular/core';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { GetUserService } from '../services/get-user.service';
import { UserItemsComponent } from '../components/user-items/user-items.component';
import { NgIf } from '@angular/common';
import { catchError, of } from 'rxjs';
import { GitHubUser } from '../models/user.type';

@Component({
  selector: 'app-home',
  imports: [SearchBoxComponent, UserItemsComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed property name
})
export class HomeComponent {
  userData = signal<GitHubUser | null>(null); // Store GitHub user data
  isLoading = false;
  errorMessage = '';

  constructor(private getUserService: GetUserService) {}

  /**
   * Handles search input from SearchBoxComponent
   */
  handleSearch(username: string) {
    this.isLoading = true;
    this.errorMessage = '';
    this.userData.set(null); // Reset data before searching

    this.getUserService.getUser(username)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'User not found or an error occurred.';
          this.isLoading = false;
          return of(null); // Ensures observable flow is not broken
        })
      )
      .subscribe((data) => {
        if (data) {
          this.userData.set(data); // Corrected way to update signals
        }
        this.isLoading = false;
      });
  }
}
