import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePageComponent } from './file-page.component';

describe('FilePageComponent', () => {
  let component: FilePageComponent;
  let fixture: ComponentFixture<FilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
