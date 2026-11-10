import { Component, inject, OnInit } from '@angular/core';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { MessageModule } from 'primeng/message';
import { ReferencesService } from '../../services/references-service';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'reference-card',
  imports: [Avatar, AvatarModule, MessageModule, NgxTypedWriterComponent, AnimateOnScrollModule],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References implements OnInit{
  private referenceService = inject(ReferencesService);
  readonly referrals = this.referenceService.referrals;

  ngOnInit(): void {
    this.referenceService.loadReferences();
  }

}
