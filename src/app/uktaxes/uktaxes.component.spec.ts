import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UktaxesComponent } from './uktaxes.component';

describe('UktaxesComponent', () => {
  let component: UktaxesComponent;
  let fixture: ComponentFixture<UktaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UktaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UktaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
