import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyemploginComponent } from './dailyemplogin.component';

describe('DailyemploginComponent', () => {
  let component: DailyemploginComponent;
  let fixture: ComponentFixture<DailyemploginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyemploginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyemploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
