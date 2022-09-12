import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassClientComponent } from './forget-pass-client.component';

describe('ForgetPassClientComponent', () => {
  let component: ForgetPassClientComponent;
  let fixture: ComponentFixture<ForgetPassClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
