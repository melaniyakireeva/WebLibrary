import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteEkbPageComponent } from './favourite-ekb-page.component';

describe('FavouriteEkbPageComponent', () => {
  let component: FavouriteEkbPageComponent;
  let fixture: ComponentFixture<FavouriteEkbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteEkbPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteEkbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
