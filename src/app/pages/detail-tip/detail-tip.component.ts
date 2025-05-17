import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';

@Component({
  selector: 'app-detail-tip',
  standalone: true,
  imports: [],
  templateUrl: './detail-tip.component.html',
  styleUrl: './detail-tip.component.scss',
})
export class DetailTipComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }
}
