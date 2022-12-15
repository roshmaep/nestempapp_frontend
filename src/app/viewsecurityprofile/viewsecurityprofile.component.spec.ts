import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecurityprofileComponent } from './viewsecurityprofile.component';

describe('ViewsecurityprofileComponent', () => {
  let component: ViewsecurityprofileComponent;
  let fixture: ComponentFixture<ViewsecurityprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsecurityprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsecurityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
