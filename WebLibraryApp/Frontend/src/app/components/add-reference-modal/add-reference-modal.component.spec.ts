import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferenceModalComponent } from './add-reference-modal.component';

describe('AddReferenceModalComponent', () => {
  let component: AddReferenceModalComponent;
  let fixture: ComponentFixture<AddReferenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReferenceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReferenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
