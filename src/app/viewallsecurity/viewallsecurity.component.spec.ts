import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsecurityComponent } from './viewallsecurity.component';

describe('ViewallsecurityComponent', () => {
  let component: ViewallsecurityComponent;
  let fixture: ComponentFixture<ViewallsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
