import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWebinarComponent } from './card-webinar.component';

describe('CardWebinarComponent', () => {
  let component: CardWebinarComponent;
  let fixture: ComponentFixture<CardWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWebinarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
