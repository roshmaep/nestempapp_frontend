import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewdailyvisitorComponent } from './securityviewdailyvisitor.component';

describe('SecurityviewdailyvisitorComponent', () => {
  let component: SecurityviewdailyvisitorComponent;
  let fixture: ComponentFixture<SecurityviewdailyvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewdailyvisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewdailyvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
