import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LirikSiirComponent } from './lirik-siir.component';

describe('LirikSiirComponent', () => {
  let component: LirikSiirComponent;
  let fixture: ComponentFixture<LirikSiirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LirikSiirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LirikSiirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
