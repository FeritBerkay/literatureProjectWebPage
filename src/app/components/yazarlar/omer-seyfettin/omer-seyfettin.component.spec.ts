import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmerSeyfettinComponent } from './omer-seyfettin.component';

describe('OmerSeyfettinComponent', () => {
  let component: OmerSeyfettinComponent;
  let fixture: ComponentFixture<OmerSeyfettinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmerSeyfettinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmerSeyfettinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
