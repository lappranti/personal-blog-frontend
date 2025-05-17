import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrickComponent } from './detail-trick.component';

describe('DetailTrickComponent', () => {
  let component: DetailTrickComponent;
  let fixture: ComponentFixture<DetailTrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTrickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailTrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
