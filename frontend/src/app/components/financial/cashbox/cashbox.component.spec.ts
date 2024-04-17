import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashboxComponent } from './cashbox.component';

describe('CashboxComponent', () => {
  let component: CashboxComponent;
  let fixture: ComponentFixture<CashboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
