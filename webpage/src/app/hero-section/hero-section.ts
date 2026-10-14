import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, inject, signal } from '@angular/core';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  imports: [NgxTypedWriterComponent],
})
export class HeroSection {
  private http = inject(HttpClient);
  private quotes: Quote[] = [];
  public quote = signal('');
  public author = signal('');

  constructor() {
    // Browser-only: during prerender this request never completes and the build times out.
    afterNextRender(() => {
      this.http.get<Quote[]>('/quotes.json').subscribe((data) => {
        this.quotes = data;
        this.getQuote();
      });
    });
  }

  public getQuote() {
    const i = Math.floor(Math.random() * this.quotes.length);
    this.quote.set(this.quotes[i].quote);
    this.author.set(this.quotes[i].author);
    console.log(this.quotes[i].quote + ' ' + this.quotes[i].author);
  }
}
