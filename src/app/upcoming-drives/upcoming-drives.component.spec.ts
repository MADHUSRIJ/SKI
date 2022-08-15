import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDrivesComponent } from './upcoming-drives.component';

describe('UpcomingDrivesComponent', () => {
  let component: UpcomingDrivesComponent;
  let fixture: ComponentFixture<UpcomingDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingDrivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
