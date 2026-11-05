import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GithubRepo {
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  languages_url: string;
}

export interface Irepo {
  name: string;
  url: string;
  desc: string | null;
  languages?: string[];
  topics?: string[];
  category?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  user = 'lesteriv28';
  httpClient = inject(HttpClient);
  protected api_url = 'https://api.github.com/users/' + this.user + '/repos';
  repos = signal<Irepo[]>([]);

  loadRepos() {
    this.httpClient.get<GithubRepo[]>(this.api_url, {
    headers: {
      'Authorization': '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',
    },
  }).subscribe({
      next: (data) => {
        const arr: Irepo[] = data.map((element) => ({
          name: element.name,
          desc: element.description,
          url: element.html_url,
          topics: element.topics,
        }));

        this.repos.set(arr);
        data.forEach((element) => this.loadLanguages(element.languages_url, element.name));
      },
      error: (err) => console.error('Failed to load repos:', err),
    });
  }

  loadLanguages(url: string, repoName: string): void {
    this.httpClient.get<Record<string, number>>(url).subscribe({
      next: (data) => {
        this.repos.update((currentRepos) => {
          return currentRepos.map((repo) =>
            repo.name === repoName ? { ...repo, languages: Object.keys(data) } : repo,
          );
        });
      },
      error: (err) => console.error('Failed to load languages:', err),
    });
  }
}
