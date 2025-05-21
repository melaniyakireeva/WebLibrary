import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardEditComponent } from './book-card-edit.component';

describe('BookCardEditComponent', () => {
  let component: BookCardEditComponent;
  let fixture: ComponentFixture<BookCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
