import { Injectable } from "@angular/core";
import { BusinessCard } from "./models/businessCard.model";
import { auth } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
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
    private auth: AuthServiceService
  ) {}

  addCard(businessCardData, cb?) {
    if (businessCardData.id) {
      const uid = this.auth.getUser();
      const businessCardRef: AngularFirestoreDocument<BusinessCard> = this.afs.doc(
        `users/${uid}/businessCards/${businessCardData.id}`
      );

      businessCardRef.set(businessCardData, { merge: true });
    } else {
      const uid = this.auth.getUser();
      this.afs
        .collection(`users/${uid}/businessCards`)
        .add(businessCardData)
        .then(docRef => {
          cb(docRef.id);
        });
    }
  }
}
