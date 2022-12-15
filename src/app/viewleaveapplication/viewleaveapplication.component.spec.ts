import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveapplicationComponent } from './viewleaveapplication.component';

describe('ViewleaveapplicationComponent', () => {
  let component: ViewleaveapplicationComponent;
  let fixture: ComponentFixture<ViewleaveapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleaveapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleaveapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
