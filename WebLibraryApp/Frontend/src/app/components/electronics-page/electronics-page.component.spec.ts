import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsPageComponent } from './electronics-page.component';

describe('ElectronicsPageComponent', () => {
  let component: ElectronicsPageComponent;
  let fixture: ComponentFixture<ElectronicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
