import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceEkbElementComponent } from './reference-ekb-element.component';

describe('ReferenceEkbElementComponent', () => {
  let component: ReferenceEkbElementComponent;
  let fixture: ComponentFixture<ReferenceEkbElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceEkbElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceEkbElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
