import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFreeComponent } from './table-free.component';

describe('TableFreeComponent', () => {
  let component: TableFreeComponent;
  let fixture: ComponentFixture<TableFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
