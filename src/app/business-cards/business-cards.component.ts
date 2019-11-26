import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../business-card.service";
import { BusinessCard } from "../models/businessCard.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-business-cards",
  templateUrl: "./business-cards.component.html",
  styleUrls: ["./business-cards.component.scss"]
})
export class BusinessCardsComponent implements OnInit {
  businessCards: Observable<any[]>;
  db: AngularFirestore;

  constructor(db: AngularFirestore, private auth: AuthServiceService) {
    this.db = db;
    this.auth.getUser().subscribe(user => {
      this.businessCards = this.db
        .collection(`users/${user.uid}/businessCards`)
        .valueChanges({idField: 'customIdName'});
    });
  }

  getCardsByName() {
    this.auth.getUser().subscribe(user => {
      this.businessCards = this.db
        .collection(`users/${user.uid}/businessCards`, ref =>
          ref.where("firstName", "==", "Price")
        )
        .valueChanges({idField: 'customIdName'});
    });
  }

  ngOnDestroy() {}

  ngOnInit() {
    console.log(this.businessCards);
  }
}
