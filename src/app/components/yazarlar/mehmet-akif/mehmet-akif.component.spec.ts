import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehmetAkifComponent } from './mehmet-akif.component';

describe('MehmetAkifComponent', () => {
  let component: MehmetAkifComponent;
  let fixture: ComponentFixture<MehmetAkifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehmetAkifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MehmetAkifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
