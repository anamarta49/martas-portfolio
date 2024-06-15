import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _router: Router) {}

  show = false;

  showMessage() {
    this.show = true;
    setTimeout(() => this._router.navigate(['about']), 3000);
  }
}
