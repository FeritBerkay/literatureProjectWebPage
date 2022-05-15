import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResatNuriComponent } from './resat-nuri.component';

describe('ResatNuriComponent', () => {
  let component: ResatNuriComponent;
  let fixture: ComponentFixture<ResatNuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResatNuriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResatNuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
