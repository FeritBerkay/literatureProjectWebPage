import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakaleComponent } from './makale.component';

describe('MakaleComponent', () => {
  let component: MakaleComponent;
  let fixture: ComponentFixture<MakaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
