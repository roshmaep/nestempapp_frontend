import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavependingComponent } from './leavepending.component';

describe('LeavependingComponent', () => {
  let component: LeavependingComponent;
  let fixture: ComponentFixture<LeavependingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavependingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavependingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
