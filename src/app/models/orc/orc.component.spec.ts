import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcComponent } from './orc.component';

describe('OrcComponent', () => {
  let component: OrcComponent;
  let fixture: ComponentFixture<OrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
