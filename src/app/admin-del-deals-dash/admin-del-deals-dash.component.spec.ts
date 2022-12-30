import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelDealsDashComponent } from './admin-del-deals-dash.component';

describe('AdminDelDealsDashComponent', () => {
  let component: AdminDelDealsDashComponent;
  let fixture: ComponentFixture<AdminDelDealsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDelDealsDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDelDealsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
