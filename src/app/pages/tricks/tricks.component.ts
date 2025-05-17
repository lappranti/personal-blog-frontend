import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';

@Component({
  selector: 'app-tricks',
  standalone: true,
  imports: [],
  templateUrl: './tricks.component.html',
  styleUrl: './tricks.component.scss',
})
export class TricksComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }
}
