import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResstPasswordComponent } from './resst-password.component';

describe('ResstPasswordComponent', () => {
  let component: ResstPasswordComponent;
  let fixture: ComponentFixture<ResstPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResstPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResstPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
