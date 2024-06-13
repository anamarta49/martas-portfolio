import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the window's scroll position
    this.isScrolled = window.scrollY > 150;
  }
}
