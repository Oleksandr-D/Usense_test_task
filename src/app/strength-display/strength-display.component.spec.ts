import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthDisplayComponent } from './strength-display.component';

describe('StrengthDisplayComponent', () => {
  let component: StrengthDisplayComponent;
  let fixture: ComponentFixture<StrengthDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrengthDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
