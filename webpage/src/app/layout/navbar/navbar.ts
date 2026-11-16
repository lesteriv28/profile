import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        url:'#'
      },
      {
        label: 'Projects',
        url:'#projects'
      },
      {
        label: 'About',
        url:'#about'
      },
      {
        label: 'Contact',
        url:'#contact'
      },
      {
        label: 'Resume',
        style: { '--p-menubar-item-focus-color': 'var(--accent-neon-blue)' },
        url: "https://raw.githubusercontent.com/lesteriv28/lesteriv28/main/assets/_LesterIvanPinoBarragan.pdf",
        target: '_blank'
      }
    ]
  }

}
