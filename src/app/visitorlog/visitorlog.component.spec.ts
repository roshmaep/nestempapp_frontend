import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorlogComponent } from './visitorlog.component';

describe('VisitorlogComponent', () => {
  let component: VisitorlogComponent;
  let fixture: ComponentFixture<VisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
