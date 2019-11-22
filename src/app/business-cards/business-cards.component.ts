import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../business-card.service";

@Component({
  selector: "app-business-cards",
  templateUrl: "./business-cards.component.html",
  styleUrls: ["./business-cards.component.scss"]
})
export class BusinessCardsComponent implements OnInit {
  businessCards: BusinessCardsComponent[];

  constructor(private businessCardService: BusinessCardService) {
    console.log(`cards: ${this.businessCardService.getCards()}`);
  }

  ngOnInit() {}
}
