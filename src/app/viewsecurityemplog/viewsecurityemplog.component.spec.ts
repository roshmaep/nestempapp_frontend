import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecurityemplogComponent } from './viewsecurityemplog.component';

describe('ViewsecurityemplogComponent', () => {
  let component: ViewsecurityemplogComponent;
  let fixture: ComponentFixture<ViewsecurityemplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsecurityemplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsecurityemplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
