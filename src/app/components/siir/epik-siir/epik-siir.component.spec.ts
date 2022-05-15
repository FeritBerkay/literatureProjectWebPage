import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpikSiirComponent } from './epik-siir.component';

describe('EpikSiirComponent', () => {
  let component: EpikSiirComponent;
  let fixture: ComponentFixture<EpikSiirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpikSiirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpikSiirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
