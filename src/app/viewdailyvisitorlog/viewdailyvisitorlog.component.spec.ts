import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyvisitorlogComponent } from './viewdailyvisitorlog.component';

describe('ViewdailyvisitorlogComponent', () => {
  let component: ViewdailyvisitorlogComponent;
  let fixture: ComponentFixture<ViewdailyvisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdailyvisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdailyvisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
