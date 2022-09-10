import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileChauffeurComponent } from './update-profile-chauffeur.component';

describe('UpdateProfileChauffeurComponent', () => {
  let component: UpdateProfileChauffeurComponent;
  let fixture: ComponentFixture<UpdateProfileChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
