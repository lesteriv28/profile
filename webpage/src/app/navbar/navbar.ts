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
        label: 'About'
      },
      {
        label: 'Skills'
      },
      {
        label: 'Projects'
      },
      {
        label: 'Contact'
      },
      {
        label: 'Resume'
      }
    ]
  }

}
