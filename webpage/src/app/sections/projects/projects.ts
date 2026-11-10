import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-projects',
  imports: [
    CardModule,
    AvatarModule,
    CardModule,
    TagModule,
    ButtonModule,
    FormsModule,
    SelectButtonModule,
    AnimateOnScrollModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  //Project service
  private projectService = inject(ProjectService);
  readonly items = this.projectService.repos;
  readonly categorizedRepos = computed(() => {
    const repos = this.items();
    return repos.map((repo) => {
      const name = repo.name.toLowerCase();
      const langs = (repo.languages ?? []).map((lang) => lang.toLowerCase());
      const topics = (repo.topics ?? []).map((t) => t.toLowerCase());
      const category = this.categorizeRepo(name, langs, topics);
      // const categorized = {
      //   ...repo ,
      //   category: category,
      // };
      // return categorized; old approach
      return {
        ...repo,
        category,
      }; //direct return
    });
  });

  readonly filteredRepos = computed(() => {
    const repos = this.categorizedRepos();
    if (this.value() != 'all') {
      return repos.filter((r) => {
        return r.category === this.value();
      });
    }
    return repos;
  });

  ngOnInit(): void {
    this.projectService.loadRepos();
  }

  //Options
  readonly projectOptions = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Hardware', value: 'hardware' },
    { name: 'Software', value: 'software' },
  ];

  value = signal('all');

  categorizeRepo(name: string, langs: string[], topics: string[]): 'hardware' | 'software' | 'web' {
    const isWeb =
      langs.some((l) => ['html', 'css', 'javascript', 'typescript'].includes(l)) ||
      topics.some((t) => ['web', 'frontend', 'react', 'vite'].includes(t));

    const isHardware =
      topics.some((t) =>
        ['fpga', 'embedded', 'firmware', 'verilog', 'vhdl', 'raspberry-pi', 'arduino'].includes(t),
      ) ||
      langs.some((l) => ['verilog', 'vhdl'].includes(l)) ||
      name.includes('fpga') ||
      name.includes('zedboard');

    if (isHardware) return 'hardware';
    if (isWeb) return 'web';
    return 'software';
  }

  filterCategory(event: any) {
    return this.filteredRepos();
  }
}
