import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceEditorComponent } from './reference-editor.component';

describe('ReferenceEditorComponent', () => {
  let component: ReferenceEditorComponent;
  let fixture: ComponentFixture<ReferenceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
