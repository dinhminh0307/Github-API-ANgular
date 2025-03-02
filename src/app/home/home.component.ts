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
  usersList = signal<GitHubUser[]>([]); // Store GitHub user data
  isLoading = false;
  errorMessage = '';

  constructor(private getUserService: GetUserService) {}

  /**
   * Handles search input from SearchBoxComponent
   * Calls GitHub API to fetch users containing the search keyword
   */
  handleSearch(keyword: string) {
    if (!keyword.trim()) return; // Prevent empty searches

    this.isLoading = true;
    this.errorMessage = '';
    this.usersList.set([]); // Reset list before searching

    this.getUserService.searchUsers(keyword)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'No users found or an error occurred.';
          this.isLoading = false;
          return of({ items: [] }); // Return an empty list if error occurs
        })
      )
      .subscribe((response) => {
        this.usersList.set(response.items); // Store fetched users
        this.isLoading = false;
      });
  }
}
