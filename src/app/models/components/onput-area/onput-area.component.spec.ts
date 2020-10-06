import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnputAreaComponent } from './onput-area.component';

describe('OnputAreaComponent', () => {
  let component: OnputAreaComponent;
  let fixture: ComponentFixture<OnputAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnputAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
