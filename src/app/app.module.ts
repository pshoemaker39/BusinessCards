import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

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
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { firebaseConfig } from "../environments/firebaseConfig";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { BusinessCardService } from "./business-card.service";
import { TestTableComponent } from "./test-table/test-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { from } from "rxjs";
import { AuthServiceService } from "./auth-service.service";
import { WebcamModule } from "ngx-webcam";
import { AuthGuard } from "./auth-gaurd";

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
    HomeComponent,
    TestTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [BusinessCardService, AuthServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
