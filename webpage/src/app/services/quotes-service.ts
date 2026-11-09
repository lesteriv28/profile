import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Quote {
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private http = inject(HttpClient);
  public quotes: Quote[] = [];
  selectedQuote = signal<Quote | null>(null);

  loadQuotes() {
    this.http.get<Quote[]>('/quotes.json').subscribe((data) => {
      this.quotes = data;
      this.getQuote();
    });
  }

  getQuote() {
    const i = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote.set(this.quotes[i]); 
  }
}