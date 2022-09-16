import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesChauffeurComponent } from './detailles-chauffeur.component';

describe('DetaillesChauffeurComponent', () => {
  let component: DetaillesChauffeurComponent;
  let fixture: ComponentFixture<DetaillesChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillesChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillesChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
