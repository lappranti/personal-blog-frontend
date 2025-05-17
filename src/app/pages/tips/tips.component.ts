import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss',
})
export class TipsComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }
}
