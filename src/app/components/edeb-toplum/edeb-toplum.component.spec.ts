import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdebToplumComponent } from './edeb-toplum.component';

describe('EdebToplumComponent', () => {
  let component: EdebToplumComponent;
  let fixture: ComponentFixture<EdebToplumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdebToplumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdebToplumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
