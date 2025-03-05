import { Component, input, Input} from '@angular/core';
import { GitHubUser } from '../../models/user.type';
import { Router, RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent {
  userData = input<GitHubUser | null>(null); // Receive GitHub user data

  constructor(private router: Router) {}

  
  viewProfile() {
    const user = this.userData(); // Get the signal's value
    if (user) {
      this.router.navigate(['/user-profile'], {
        state: { user } // Pass the value, not the signal
      });
    }
  }
}
