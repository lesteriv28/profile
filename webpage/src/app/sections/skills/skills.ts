import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ChartModule } from 'primeng/chart';
import { Contact } from '../contact/contact';
import { References } from '../references/references';
@Component({
  selector: 'app-skills',
  imports: [KnobModule, FormsModule, AnimateOnScrollModule, ChartModule, Contact, References],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  val: number = 80;

data = {
  labels: [
    'Frontend',
    'Backend',
    'Databases',
    'Systems',
    'Embedded',
    'Testing',
    'Architecture',
    'Communication',
  ],
  datasets: [
    {
      label: 'Skills Assessment',
      data: [82, 70, 70, 65, 60, 75, 55, 95],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      pointBackgroundColor: '#3b82f6',
      borderWidth: 2,
      pointRadius: 2,
      fill: true
    }
  ]
};

  options = {
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeinexpo',
        from: 0.3,
        to: 0.45,
        loop: true
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 20,
          color: 'white',
          showLabelBackdrop: false,
        },
        pointLabels: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        }
    }
  };
}
