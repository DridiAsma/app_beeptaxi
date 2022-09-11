import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChauffeursComponent } from './profile-chauffeurs.component';

describe('ProfileChauffeursComponent', () => {
  let component: ProfileChauffeursComponent;
  let fixture: ComponentFixture<ProfileChauffeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChauffeursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileChauffeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
