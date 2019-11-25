import { Injectable } from "@angular/core";
import { BusinessCard } from "./models/businessCard.model";
import { auth } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from "./models/user.model";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
  providedIn: "root"
})
export class BusinessCardService {
  card$: Observable<BusinessCard>;
  uid$: Observable<User>;
  id: string;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthServiceService
  ) {}

  confirmUID() {}
  addCard(businessCardData) {
    this.auth.getUser().subscribe(user => {
      this.afs
        .collection(`users/${user.uid}/businessCards`)
        .add(businessCardData);
    });
  }

  getCards(cb) {
    this.auth.getUser().subscribe(user => {
      this.afs
        .collection(`users/${user.uid}/businessCards`)
        .valueChanges()
        .subscribe(cards => {
          cb(cards);
        });
    });
  }
}

// createCard({
//   uid,
//   company,
//   position,
//   firstName,
//   lastName,
//   address,
//   address2,
//   city,
//   state,
//   postalCode
// }: BusinessCard) {
//   const businessCardRef: AngularFirestoreDocument<BusinessCard> = this.afs.doc(
//     `cards`
//   );

//   const data = {
//     uid,
//     company,
//     position,
//     firstName,
//     lastName,
//     address,
//     address2,
//     city,
//     state,
//     postalCode
//   };

//   return businessCardRef.set(data, { merge: true });
// }
