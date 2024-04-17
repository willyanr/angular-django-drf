import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFinancialComponent } from './table-financial.component';

describe('TableFinancialComponent', () => {
  let component: TableFinancialComponent;
  let fixture: ComponentFixture<TableFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFinancialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
