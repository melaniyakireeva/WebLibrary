import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementToReferenceComponent } from './element-to-reference.component';

describe('ElementToReferenceComponent', () => {
  let component: ElementToReferenceComponent;
  let fixture: ComponentFixture<ElementToReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementToReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementToReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
