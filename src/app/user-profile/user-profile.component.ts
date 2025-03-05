// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { GitHubUser } from '../models/user.type';
import { Router } from '@angular/router';
import { GetRepoService } from '../services/get-repo.service';
import { CommonModule } from '@angular/common';
import { Repository } from '../models/repo.type';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

// user-profile.component.ts update
export class UserProfileComponent implements OnInit {
  user: GitHubUser | null = null;
  repositories: Repository[] = [];
  currentPage = 1;
  reposPerPage = 6;
  totalPages = 1;

  constructor(
    private router: Router,
    private githubService: GetRepoService
  ) {
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
    
    this.githubService.getRepositories(
      this.user.repos_url, 
      this.currentPage, 
      this.reposPerPage
    ).subscribe({
      next: ({ repos, totalPages }) => {
        this.repositories = repos;
        this.totalPages = totalPages;
      },
      error: (err) => console.error('Error fetching repos:', err)
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchRepositories();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchRepositories();
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchRepositories();
    }
  }
}