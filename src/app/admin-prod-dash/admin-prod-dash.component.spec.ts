import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdDashComponent } from './admin-prod-dash.component';

describe('AdminProdDashComponent', () => {
  let component: AdminProdDashComponent;
  let fixture: ComponentFixture<AdminProdDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProdDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminProdDashComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
