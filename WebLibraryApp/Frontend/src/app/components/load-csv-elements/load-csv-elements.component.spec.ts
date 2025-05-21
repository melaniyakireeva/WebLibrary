import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCsvElementsComponent } from './load-csv-elements.component';

describe('LoadCsvElementsComponent', () => {
  let component: LoadCsvElementsComponent;
  let fixture: ComponentFixture<LoadCsvElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadCsvElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadCsvElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
