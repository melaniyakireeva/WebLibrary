import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFromTextModalComponent } from './filter-from-text-modal.component';

describe('FilterFromTextModalComponent', () => {
  let component: FilterFromTextModalComponent;
  let fixture: ComponentFixture<FilterFromTextModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterFromTextModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterFromTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
