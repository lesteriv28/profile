import { afterNextRender, Component, signal } from '@angular/core';
import { Navbar } from './sections/navbar/navbar';
import { HeroSection } from "./sections/hero-section/hero-section";
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';


@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection, About, Skills, Projects, NgxTypedWriterModule, NgxStarrySkyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('webpage');
    constructor() {
    afterNextRender(() => {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    });
  }
}
