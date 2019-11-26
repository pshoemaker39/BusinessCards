import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../business-card.service";
import { BusinessCard } from "../models/businessCard.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthServiceService } from "../auth-service.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-business-cards",
  templateUrl: "./business-cards.component.html",
  styleUrls: ["./business-cards.component.scss"]
})
export class BusinessCardsComponent implements OnInit {
  businessCards: Observable<any[]>;
  db: AngularFirestore;

  nameSearch = this.fb.group({
    personName: null
  });

  companySearch = this.fb.group({
    companyName: null
  });

  constructor(
    db: AngularFirestore,
    private auth: AuthServiceService,
    private fb: FormBuilder
  ) {
    this.db = db;
    this.auth.getUser().subscribe(user => {
      this.businessCards = this.db
        .collection(`users/${user.uid}/businessCards`)
        .valueChanges({ idField: "customIdName" });
    });
  }

  getCardsByName() {
    this.auth.getUser().subscribe(user => {
      this.businessCards = this.db
        .collection(`users/${user.uid}/businessCards`, ref =>
          ref.where("firstName", "==", this.nameSearch.value.personName)
        )
        .valueChanges({ idField: "customIdName" });
    });
  }

  getCardsByCompany() {
    this.auth.getUser().subscribe(user => {
      this.businessCards = this.db
        .collection(`users/${user.uid}/businessCards`, ref =>
          ref.where("company", "==", this.companySearch.value.companyName)
        )
        .valueChanges({ idField: "customIdName" });
    });
  }

  deleteCard(id) {
    this.auth.getUser().subscribe(user => {
      this.db
        .collection("users")
        .doc(user.uid)
        .collection("businessCards")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    });
  }

  ngOnDestroy() {}

  ngOnInit() {}
}
