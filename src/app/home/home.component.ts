import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  creds = this.fb.group({
    email: null,
    password: null
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthServiceService,
    private router: Router
  ) {}

  createAccount() {
    this.auth.createAccount(
      this.creds.controls.email.value,
      this.creds.controls.password.value
    );
  }

  onSubmit() {
    this.auth.signIn(
      this.creds.controls.email.value,
      this.creds.controls.password.value
    );
    this.router.navigate(["cards"]);
  }

  ngOnInit() {}
}
