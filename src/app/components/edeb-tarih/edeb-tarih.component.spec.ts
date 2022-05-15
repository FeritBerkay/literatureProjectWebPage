import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdebTarihComponent } from './edeb-tarih.component';

describe('EdebTarihComponent', () => {
  let component: EdebTarihComponent;
  let fixture: ComponentFixture<EdebTarihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdebTarihComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdebTarihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
