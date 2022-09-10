import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdteProfileClientComponent } from './updte-profile-client.component';

describe('UpdteProfileClientComponent', () => {
  let component: UpdteProfileClientComponent;
  let fixture: ComponentFixture<UpdteProfileClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdteProfileClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdteProfileClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
