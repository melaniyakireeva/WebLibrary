import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureCardEditComponent } from './manufacture-card-edit.component';

describe('ManufactureCardEditComponent', () => {
  let component: ManufactureCardEditComponent;
  let fixture: ComponentFixture<ManufactureCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufactureCardEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufactureCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
