import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }
}
