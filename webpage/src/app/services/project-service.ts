import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementAt, Observable, switchMap, pipe, map } from 'rxjs';

export interface Irepository {
  name: string;
  url: string;
  desc?: string;
  languages: string[];
  topics?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  user = 'lesteriv28';
  httpClient = inject(HttpClient);
  url = 'https://api.github.com/users/' + this.user + '/repos';

  raw: any[] = [];
  repos: Irepository[] = [];

  loadRepos() {
    this.httpClient.get<any[]>(this.url).subscribe({
      next: (data) => {
        this.raw = data;
        this.raw.forEach((element, i) => {
          this.repos[i] = {
            name: element.name,
            url: element.html_url,
            desc: element.description,
            languages: element.languages_url,
            topics: element.topics,
          };
          console.log(i, this.repos[i]);
        });
      },
    });
  }
}
