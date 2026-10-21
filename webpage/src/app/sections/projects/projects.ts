import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {

  private repos = inject(ProjectService);
  
  ngOnInit(): void {
    this.repos.loadRepos();
  }


  
}
