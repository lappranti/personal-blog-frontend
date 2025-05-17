import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TricksAndTipsComponent } from './tricks-and-tips.component';

describe('TricksAndTipsComponent', () => {
  let component: TricksAndTipsComponent;
  let fixture: ComponentFixture<TricksAndTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TricksAndTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TricksAndTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
