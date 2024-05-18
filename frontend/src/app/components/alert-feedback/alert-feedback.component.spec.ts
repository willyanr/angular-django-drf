import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFeedbackComponent } from './alert-feedback.component';

describe('AlertFeedbackComponent', () => {
  let component: AlertFeedbackComponent;
  let fixture: ComponentFixture<AlertFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
