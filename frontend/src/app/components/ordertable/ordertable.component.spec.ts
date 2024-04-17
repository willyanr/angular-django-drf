import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertableComponent } from './ordertable.component';

describe('OrdertableComponent', () => {
  let component: OrdertableComponent;
  let fixture: ComponentFixture<OrdertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
