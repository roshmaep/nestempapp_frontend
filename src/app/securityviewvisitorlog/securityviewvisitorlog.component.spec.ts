import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewvisitorlogComponent } from './securityviewvisitorlog.component';

describe('SecurityviewvisitorlogComponent', () => {
  let component: SecurityviewvisitorlogComponent;
  let fixture: ComponentFixture<SecurityviewvisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewvisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewvisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
