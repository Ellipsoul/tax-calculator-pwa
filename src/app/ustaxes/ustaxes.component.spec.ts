import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstaxesComponent } from './ustaxes.component';

describe('UstaxesComponent', () => {
  let component: UstaxesComponent;
  let fixture: ComponentFixture<UstaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
