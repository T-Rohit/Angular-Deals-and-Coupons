import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWithoutNavbarComponent } from './home-without-navbar.component';

describe('HomeWithoutNavbarComponent', () => {
  let component: HomeWithoutNavbarComponent;
  let fixture: ComponentFixture<HomeWithoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWithoutNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWithoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
