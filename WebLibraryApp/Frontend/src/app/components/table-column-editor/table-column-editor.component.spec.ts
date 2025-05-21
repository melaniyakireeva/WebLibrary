import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnEditorComponent } from './table-column-editor.component';

describe('TableColumnEditorComponent', () => {
  let component: TableColumnEditorComponent;
  let fixture: ComponentFixture<TableColumnEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableColumnEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColumnEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
