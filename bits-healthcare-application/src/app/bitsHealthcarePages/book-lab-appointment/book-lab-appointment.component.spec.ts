import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLabAppointmentComponent } from './book-lab-appointment.component';

describe('BookLabAppointmentComponent', () => {
  let component: BookLabAppointmentComponent;
  let fixture: ComponentFixture<BookLabAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLabAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLabAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
