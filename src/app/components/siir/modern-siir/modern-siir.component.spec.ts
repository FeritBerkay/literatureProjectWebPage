import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSiirComponent } from './modern-siir.component';

describe('ModernSiirComponent', () => {
  let component: ModernSiirComponent;
  let fixture: ComponentFixture<ModernSiirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernSiirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernSiirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
