import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';

@Component({
  selector: 'app-detail-trick',
  standalone: true,
  imports: [],
  templateUrl: './detail-trick.component.html',
  styleUrl: './detail-trick.component.scss',
})
export class DetailTrickComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }
}
