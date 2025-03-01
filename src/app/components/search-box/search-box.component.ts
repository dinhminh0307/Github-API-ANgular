import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  ngAfterViewInit() {
    console.log('ViewChild initialized:', this.searchInput); // Ensure it's available
  }

  onSearch() {
    if (this.searchInput) {
      const query = this.searchInput.nativeElement.value; // Get input value safely
      console.log('Search Query:', query);
    } else {
      console.error('Search input is not initialized');
    }
  }
}
