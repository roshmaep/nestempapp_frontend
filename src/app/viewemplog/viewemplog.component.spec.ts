import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemplogComponent } from './viewemplog.component';

describe('ViewemplogComponent', () => {
  let component: ViewemplogComponent;
  let fixture: ComponentFixture<ViewemplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
