import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BusinessCardService } from "../business-card.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-new-business-card",
  templateUrl: "./new-business-card.component.html",
  styleUrls: ["./new-business-card.component.scss"]
})
export class NewBusinessCardComponent implements OnInit {
  id: string;
  db: AngularFirestore;
  businessCard = this.fb.group({
    id: null,
    company: null,
    position: [null],
    firstName: [null],
    lastName: [null],
    phone: [null],
    email: [null],
    address: [null],
    address2: null,
    city: [null],
    state: [null],
    imageURL: [null],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9)
      ])
    ]
  });

  hasUnitNumber = false;

  states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "American Samoa", abbreviation: "AS" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "District Of Columbia", abbreviation: "DC" },
    { name: "Federated States Of Micronesia", abbreviation: "FM" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Guam", abbreviation: "GU" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Marshall Islands", abbreviation: "MH" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Northern Mariana Islands", abbreviation: "MP" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Palau", abbreviation: "PW" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Puerto Rico", abbreviation: "PR" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virgin Islands", abbreviation: "VI" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
  ];

  constructor(
    private fb: FormBuilder,
    private businessCardService: BusinessCardService,
    private route: ActivatedRoute,
    db: AngularFirestore,
    private auth: AuthServiceService,
    private router: Router
  ) {
    this.db = db;
    // this.businessCard.controls["firstName"].setValue("new");
  }

  onSubmit() {
    this.router.navigate(["cards"]);
    this.businessCardService.addCard(this.businessCard.value, id => {
      console.log(`cardId: ${id}`);
      this.router.navigate(["cards"]);
    });
  }

  setValues(data, id) {
    this.businessCard.controls["id"].setValue(id);
    this.businessCard.controls["company"].setValue(data.company);
    this.businessCard.controls["position"].setValue(data.position);
    this.businessCard.controls["firstName"].setValue(data.firstName);
    this.businessCard.controls["lastName"].setValue(data.lastName);
    this.businessCard.controls["phone"].setValue(data.phone);
    this.businessCard.controls["email"].setValue(data.email);
    this.businessCard.controls["address"].setValue(data.address);
    this.businessCard.controls["address2"].setValue(data.address2);
    this.businessCard.controls["city"].setValue(data.city);
    this.businessCard.controls["state"].setValue(data.state);
    this.businessCard.controls["postalCode"].setValue(data.postalCode);
    this.businessCard.controls["imageURL"].setValue(data.imageURL);
  }

  editCard(id) {
    const that = this;
    this.auth.getUser().subscribe(user => {
      this.db
        .collection(`users/${user.uid}/businessCards`)
        .doc(id)
        .ref.get()
        .then(doc => {
          if (doc.exists) {
            return doc.data();
          }
        })
        .then(data => this.setValues(data, id));
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.editCard(this.id);
    }
  }
}
