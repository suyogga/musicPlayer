import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})

export class TopbarComponent {
  searchQuery: string = '';

  @Output() toggleMenu = new EventEmitter<void>();

  onClickToggle() {
    this.toggleMenu.emit();
  }

  onSearch() {
    // Implement search functionality here
    console.log('Search Query:', this.searchQuery);
    // You can filter your data here based on this.searchQuery
  }

}

