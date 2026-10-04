import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'hero-section',
  imports: [NgForOf],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private http = inject(HttpClient);
  public quotes: any;
  public quote: string = "";
  public author: string = "";

  constructor() {
    this.http.get('/quotes.json').subscribe((data) => {
      
      this.quotes = data;
      this.getQuote();
    });
  }

  //methods
  public getQuote() {

    const i = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[i].quote;
    this.author = this.quotes[i].author;
    }

 
}
