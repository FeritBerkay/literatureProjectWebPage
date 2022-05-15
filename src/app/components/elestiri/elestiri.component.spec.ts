import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElestiriComponent } from './elestiri.component';

describe('ElestiriComponent', () => {
  let component: ElestiriComponent;
  let fixture: ComponentFixture<ElestiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElestiriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElestiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
