import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewemployeeComponent } from './securityviewemployee.component';

describe('SecurityviewemployeeComponent', () => {
  let component: SecurityviewemployeeComponent;
  let fixture: ComponentFixture<SecurityviewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
