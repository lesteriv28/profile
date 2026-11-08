import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';
import { QuotesService } from '../../services/quotes-service';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  imports: [NgxTypedWriterComponent],
})
export class HeroSection {
  private quoteService = inject(QuotesService);

  readonly quote = computed(() => this.quoteService.selectedQuote()?.quote ?? '');

  readonly author = computed(() => this.quoteService.selectedQuote()?.author ?? '');

  constructor() {
    // Browser-only: during prerender this request never completes and the build times out.
    afterNextRender(() => {
      this.quoteService.loadQuotes();
    });
  }
}
