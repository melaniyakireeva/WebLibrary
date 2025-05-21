import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringFilterEditorComponent } from './string-filter-editor.component';

describe('StringFilterEditorComponent', () => {
  let component: StringFilterEditorComponent;
  let fixture: ComponentFixture<StringFilterEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringFilterEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringFilterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
