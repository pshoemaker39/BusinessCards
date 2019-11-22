import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NewBusinessCardComponent } from "./new-business-card/new-business-card.component";
import { BusinessCardsComponent } from "./business-cards/business-cards.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "new", component: NewBusinessCardComponent },
  { path: "cards", component: BusinessCardsComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
