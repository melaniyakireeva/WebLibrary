import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicTableComponent } from './electronic-table.component';

describe('ElectronicTableComponent', () => {
  let component: ElectronicTableComponent;
  let fixture: ComponentFixture<ElectronicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
