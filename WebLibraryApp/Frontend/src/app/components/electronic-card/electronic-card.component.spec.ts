import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicCardComponent } from './electronic-card.component';

describe('ElectronicCardComponent', () => {
  let component: ElectronicCardComponent;
  let fixture: ComponentFixture<ElectronicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
