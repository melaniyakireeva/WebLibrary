import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCardComponent } from './manufacturer-card.component';

describe('ManufacturerCardComponent', () => {
  let component: ManufacturerCardComponent;
  let fixture: ComponentFixture<ManufacturerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
