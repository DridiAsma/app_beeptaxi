import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChauffeurLayoutComponent } from './auth-chauffeur-layout.component';

describe('AuthChauffeurLayoutComponent', () => {
  let component: AuthChauffeurLayoutComponent;
  let fixture: ComponentFixture<AuthChauffeurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthChauffeurLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthChauffeurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
