import { Component } from '@angular/core';
import { TypeWriterService } from '../shared/services/type-writer.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  yearsOfExperience = (new Date().getFullYear()) - 2021;

  titles = ['>frontend developer', '>traveller', '>artist', '>based in Lisbon'];

  constructor(
    private typeWriterService: TypeWriterService
  ) {}

  typedText = this.typeWriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));
}
