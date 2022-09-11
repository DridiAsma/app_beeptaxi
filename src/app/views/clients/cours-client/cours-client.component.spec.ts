import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursClientComponent } from './cours-client.component';

describe('CoursClientComponent', () => {
  let component: CoursClientComponent;
  let fixture: ComponentFixture<CoursClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
