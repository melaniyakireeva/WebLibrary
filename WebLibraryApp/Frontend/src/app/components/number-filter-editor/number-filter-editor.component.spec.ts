import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFilterEditorComponent } from './number-filter-editor.component';

describe('NumberFilterEditorComponent', () => {
  let component: NumberFilterEditorComponent;
  let fixture: ComponentFixture<NumberFilterEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberFilterEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberFilterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
