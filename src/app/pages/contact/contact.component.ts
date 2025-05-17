import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TitleComponent, SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contacts = [
    {
      label: 'Email',
      value: 'ndeurys@gamil.com',
      icon: './images/icon-open-mail.svg',
    },
    {
      label: 'Phone',
      value: '+221775050123',
      icon: './images/icon-call.svg',
    },
    {
      label: 'Socials',
      value: '',
      icon: './images/icon-social.svg',
    },
  ];

  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }
}
