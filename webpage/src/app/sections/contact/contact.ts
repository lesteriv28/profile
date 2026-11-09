import { Component, signal } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PopoverModule } from 'primeng/popover';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';


@Component({
  selector: 'contact-card',
  imports: [FieldsetModule, AvatarModule, PopoverModule, TagModule, ButtonModule, MessageModule, NgxTypedWriterComponent, TooltipModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
