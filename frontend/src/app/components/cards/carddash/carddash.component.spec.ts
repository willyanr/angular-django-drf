import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddashComponent } from './carddash.component';

describe('CarddashComponent', () => {
  let component: CarddashComponent;
  let fixture: ComponentFixture<CarddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarddashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
