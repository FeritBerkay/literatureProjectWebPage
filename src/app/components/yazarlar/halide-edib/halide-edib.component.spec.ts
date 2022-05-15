import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalideEdibComponent } from './halide-edib.component';

describe('HalideEdibComponent', () => {
  let component: HalideEdibComponent;
  let fixture: ComponentFixture<HalideEdibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalideEdibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalideEdibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
