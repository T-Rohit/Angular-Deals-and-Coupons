import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAdminLoginComponent } from './after-admin-login.component';

describe('AfterAdminLoginComponent', () => {
  let component: AfterAdminLoginComponent;
  let fixture: ComponentFixture<AfterAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterAdminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AfterAdminLoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
