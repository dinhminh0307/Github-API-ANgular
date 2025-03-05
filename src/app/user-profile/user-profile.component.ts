import { Component, OnInit } from '@angular/core';
import { GitHubUser } from '../models/user.type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  user: GitHubUser | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = history.state.user; // Get user data from state
    if (!this.user) {
      this.router.navigate(['/']); // Redirect to home if no data
    }
  }
}
