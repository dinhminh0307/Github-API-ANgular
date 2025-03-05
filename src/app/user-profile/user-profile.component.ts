// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { GitHubUser } from '../models/user.type';
import { Router, NavigationExtras } from '@angular/router'; // <-- Add NavigationExtras
import { Repository } from '../models/repo.type';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: GitHubUser | null = null;
  repositories: Repository[] = [];

  constructor(private router: Router, private http: HttpClient) {
    // Get state from router navigation instead of history
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.['user'];
  }

  ngOnInit() {
    if (!this.user) {
      this.router.navigate(['/']);
      return;
    }

    this.fetchRepositories();
  }

  fetchRepositories() {
    if (!this.user?.repos_url) return;
    
    this.http.get<Repository[]>(this.user.repos_url).subscribe(
      (repos) => (this.repositories = repos),
      (error) => console.error('Error fetching repos:', error)
    );
  }
}