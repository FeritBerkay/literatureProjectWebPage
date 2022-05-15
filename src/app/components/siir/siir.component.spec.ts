import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiirComponent } from './siir.component';

describe('SiirComponent', () => {
  let component: SiirComponent;
  let fixture: ComponentFixture<SiirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
