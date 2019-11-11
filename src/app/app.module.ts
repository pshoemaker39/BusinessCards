import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusinessCardComponent } from "./business-card/business-card.component";
import { NewBusinessCardComponent } from "./new-business-card/new-business-card.component";
import { WebCamComponent } from "./web-cam/web-cam.component";
import { BusinessCardsComponent } from "./business-cards/business-cards.component";
import { SearchBusinessCardsComponent } from "./search-business-cards/search-business-cards.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Material imports
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
const Material = [MatToolbarModule, MatButtonModule];

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { firebaseConfig } from "../environments/firebaseConfig";

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    NewBusinessCardComponent,
    WebCamComponent,
    BusinessCardsComponent,
    SearchBusinessCardsComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
