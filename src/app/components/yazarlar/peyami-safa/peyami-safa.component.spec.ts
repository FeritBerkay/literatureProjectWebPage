import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeyamiSafaComponent } from './peyami-safa.component';

describe('PeyamiSafaComponent', () => {
  let component: PeyamiSafaComponent;
  let fixture: ComponentFixture<PeyamiSafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeyamiSafaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeyamiSafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
