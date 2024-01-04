import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})

export class DirectivesComponent {
  font = 'Arial'
  font_size='15px'
  classes = ['small-title','green-title']
}
