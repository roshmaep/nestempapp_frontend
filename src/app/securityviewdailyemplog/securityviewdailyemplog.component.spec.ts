import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewdailyemplogComponent } from './securityviewdailyemplog.component';

describe('SecurityviewdailyemplogComponent', () => {
  let component: SecurityviewdailyemplogComponent;
  let fixture: ComponentFixture<SecurityviewdailyemplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewdailyemplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewdailyemplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
