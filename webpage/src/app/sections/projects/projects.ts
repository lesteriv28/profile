import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { of } from 'rxjs';

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
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  //Project service
  private projectService = inject(ProjectService);
  readonly items = this.projectService.repos;
  ngOnInit(): void {
    this.projectService.loadRepos();

    for (var obj of this.items()) {
      const name = obj.name.toLowerCase();
      const topics = (obj.topics || []).map((t) => t.toLowerCase());
      const langs = (obj.languages || []).map((l) => l.toLowerCase());
      console.log(this.categorizeRepo(name, langs, topics));
    }
  }

  //Options
  projectOptions: any[] = [
    { name: 'All', value: 1 },
    { name: 'Web', value: 2 },
    { name: 'Embedded', value: 3 },
    { name: 'Firmware', value: 4 },
    { name: 'Software', value: 5 },
  ];

  value!: number;

  categorizeRepo(name: string, langs: string[], topics: string[]) {

    const isWeb =
      langs.some((l) => ['html', 'css', 'javascript', 'typescript'].includes(l)) ||
      topics.some((t) => ['web', 'frontend', 'react', 'vite'].includes(t));

    const isHardware =
      topics.some((t) => ['fpga', 'embedded', 'firmware', 'verilog', 'vhdl', 'raspberry-pi', 'arduino'].includes(t),) ||
      langs.some((l) => ['verilog', 'vhdl'].includes(l)) ||
      name.includes('fpga') ||
      name.includes('zedboard');

    if (isHardware) return 'hardware';
    if (isWeb) return 'web';
    return 'software';
  }
}
