import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgtaxesComponent } from './sgtaxes.component';

describe('SgtaxesComponent', () => {
  let component: SgtaxesComponent;
  let fixture: ComponentFixture<SgtaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgtaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgtaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
