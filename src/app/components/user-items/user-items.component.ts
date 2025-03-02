import { Component, input, Input} from '@angular/core';
import { GitHubUser } from '../../models/user.type';
@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent {
  userData = input<GitHubUser | null>(null); // Receive GitHub user data
  
}
