import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaerchBusinessCardsComponent } from './saerch-business-cards.component';

describe('SaerchBusinessCardsComponent', () => {
  let component: SaerchBusinessCardsComponent;
  let fixture: ComponentFixture<SaerchBusinessCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaerchBusinessCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaerchBusinessCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
