import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahattinAliComponent } from './sabahattin-ali.component';

describe('SabahattinAliComponent', () => {
  let component: SabahattinAliComponent;
  let fixture: ComponentFixture<SabahattinAliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabahattinAliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabahattinAliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
