import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../business-card.service";
import { BusinessCard } from "../models/businessCard.model";

@Component({
  selector: "app-business-cards",
  templateUrl: "./business-cards.component.html",
  styleUrls: ["./business-cards.component.scss"]
})
export class BusinessCardsComponent implements OnInit {
  businessCards: BusinessCard[];

  constructor(private businessCardService: BusinessCardService) {}

  ngOnInit() {
    this.businessCardService.getCards(data => {
      this.businessCards = data;
    });
  }
}
