import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertadminComponent } from './alertadmin.component';

describe('AlertadminComponent', () => {
  let component: AlertadminComponent;
  let fixture: ComponentFixture<AlertadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
