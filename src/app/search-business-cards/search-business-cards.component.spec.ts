import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBusinessCardsComponent } from "./search-business-cards.component";

describe("SearchBusinessCardsComponent", () => {
  let component: SearchBusinessCardsComponent;
  let fixture: ComponentFixture<SearchBusinessCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBusinessCardsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusinessCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
