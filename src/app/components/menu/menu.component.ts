import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  activeButton: string | null = null;
  menuOpen = false;
  isVisible = false;
  
  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.isVisible = !this.isVisible;
  }
}
