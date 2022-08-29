import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordLayoutComponent } from './forgetpassword-layout.component';

describe('ForgetpasswordLayoutComponent', () => {
  let component: ForgetpasswordLayoutComponent;
  let fixture: ComponentFixture<ForgetpasswordLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswordLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasswordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
