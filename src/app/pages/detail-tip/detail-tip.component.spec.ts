import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTipComponent } from './detail-tip.component';

describe('DetailTipComponent', () => {
  let component: DetailTipComponent;
  let fixture: ComponentFixture<DetailTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
