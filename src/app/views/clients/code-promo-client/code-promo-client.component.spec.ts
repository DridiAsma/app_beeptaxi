import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePromoClientComponent } from './code-promo-client.component';

describe('CodePromoClientComponent', () => {
  let component: CodePromoClientComponent;
  let fixture: ComponentFixture<CodePromoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodePromoClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodePromoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
