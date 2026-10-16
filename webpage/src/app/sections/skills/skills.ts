import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-skills',
  imports: [KnobModule, FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  val: number = 80;

}
