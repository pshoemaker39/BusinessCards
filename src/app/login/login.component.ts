import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthServiceService) {}

  ngOnInit() {}
}
