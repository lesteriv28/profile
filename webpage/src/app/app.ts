import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HeroSection } from "./hero-section/hero-section";
import { About } from './about/about';
import { Skills } from './skills/skills';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeroSection, About, Skills, NgxTypedWriterModule, NgxStarrySkyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('webpage');
}
