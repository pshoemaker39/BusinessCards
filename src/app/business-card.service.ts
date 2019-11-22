import { Injectable } from "@angular/core";
import { BusinessCardComponent } from "./business-card/business-card.component";
import { BusinessCardsComponent } from "./business-cards/business-cards.component";

@Injectable({
  providedIn: "root"
})
export class BusinessCardService {
  card: BusinessCardComponent;
  cards: BusinessCardsComponent[];

  constructor() {
    this.cards = [];
  }

  addCard(businessCardData) {
    //TODO: use business card component to create busines card from data
    this.cards.push(businessCardData);
    console.log("Card Stored", this.cards.length);
  }

  getCards() {
    console.log("Getting Cards");
    return this.cards;
  }
}
