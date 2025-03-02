import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private baseUrl = 'https://api.github.com/users'; // GitHub API URL
  http = inject(HttpClient); // Inject HttpClient

  constructor() { }

  /**
   * Fetch a GitHub user by username
   * @param username - The GitHub username to fetch
   * @returns Observable containing user data
   */
  getUser(username: string): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.baseUrl}/${username}`);
  }
}
