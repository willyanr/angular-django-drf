import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestServiceComponent } from './best-service.component';

describe('BestServiceComponent', () => {
  let component: BestServiceComponent;
  let fixture: ComponentFixture<BestServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
