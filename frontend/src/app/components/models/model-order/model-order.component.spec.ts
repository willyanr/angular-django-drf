import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOrderComponent } from './model-order.component';

describe('ModelOrderComponent', () => {
  let component: ModelOrderComponent;
  let fixture: ComponentFixture<ModelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
