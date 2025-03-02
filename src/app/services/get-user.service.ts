import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private searchUrl = 'https://api.github.com/search/users?q='; // GitHub API URL
  http = inject(HttpClient); // Inject HttpClient

  constructor() { }

  /**
   * Fetch a GitHub user by username
   * @param username - The GitHub username to fetch
   * @returns Observable containing user data
   */
  searchUsers(keyword: string): Observable<{ items: GitHubUser[] }> {
    return this.http.get<{ items: GitHubUser[] }>(`${this.searchUrl}${keyword}`);
  }
}
