import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Irepository {
  name: string;
  url: string;
  desc?: string;
  lang_url: string;
  languages?: string[];
  topics?: string[];
}


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  user = 'lesteriv28';
  httpClient = inject(HttpClient);
  url = 'https://api.github.com/users/' + this.user + '/repos';
  lang_url?: string;


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
            lang_url: element.languages_url,
            topics: element.topics,
          };
          this.loadLanguages(this.repos[i].lang_url, i);
        });
       console.log(this.repos);

      },

    });
  }

  loadLanguages(url: any, index: number):void {
  
    this.httpClient.get<Record<string, number>>(url).subscribe({
      next: (data) => {
        this.repos[index].languages = Object.keys(data);
      },
    });
  }
}
