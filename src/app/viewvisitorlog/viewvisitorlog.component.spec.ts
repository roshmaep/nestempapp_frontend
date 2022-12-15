import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisitorlogComponent } from './viewvisitorlog.component';

describe('ViewvisitorlogComponent', () => {
  let component: ViewvisitorlogComponent;
  let fixture: ComponentFixture<ViewvisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
