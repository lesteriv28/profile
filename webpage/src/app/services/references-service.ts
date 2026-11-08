import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ReferralJson {
  name: string;
  headshot: string;
  comment: string;
  title: string;
  workplace: string;
  url: string;
}
export interface Ireferral {
  name: string;
  comment: string;
  title: string;
  company: string;
  url: string;
  pic?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  httpClient = inject(HttpClient);
  referrals = signal<Ireferral[]>([]);

  loadReferences() {
    this.httpClient.get<ReferralJson[]>('/references.json').subscribe({
      next: (data) => {
        const arr: Ireferral[] = data.map((element) => ({
          name: element.name,
          comment: element.comment,
          title: element.title,
          company: element.workplace,
          url: element.url,
          pic: element.headshot,
        }));

        this.referrals.set(arr);
      },
      error: (err) => console.error('Failed to load references:', err),
    });
  }
}
