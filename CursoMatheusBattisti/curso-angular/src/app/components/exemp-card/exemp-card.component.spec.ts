import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempCardComponent } from './exemp-card.component';

describe('ExempCardComponent', () => {
  let component: ExempCardComponent;
  let fixture: ComponentFixture<ExempCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExempCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExempCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
