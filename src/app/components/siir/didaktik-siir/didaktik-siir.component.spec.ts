import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidaktikSiirComponent } from './didaktik-siir.component';

describe('DidaktikSiirComponent', () => {
  let component: DidaktikSiirComponent;
  let fixture: ComponentFixture<DidaktikSiirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidaktikSiirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DidaktikSiirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
