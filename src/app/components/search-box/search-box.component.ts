import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() searchEvent = new EventEmitter<string>(); // ✅ Emit event to parent

  @ViewChild('searchInput') searchInput!: ElementRef;

  onSearch() {
    const searchValue = this.searchInput.nativeElement.value.trim();
    if (searchValue) {
      this.searchEvent.emit(searchValue); // ✅ Emit value to parent (Home)
    }
  }
}
