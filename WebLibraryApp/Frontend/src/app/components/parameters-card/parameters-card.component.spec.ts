import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersCardComponent } from './parameters-card.component';

describe('ParametersCardComponent', () => {
  let component: ParametersCardComponent;
  let fixture: ComponentFixture<ParametersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametersCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
