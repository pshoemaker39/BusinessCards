import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NewBusinessCardComponent } from "./new-business-card/new-business-card.component";
import { BusinessCardsComponent } from "./business-cards/business-cards.component";
import { TestTableComponent } from "./test-table/test-table.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "new", component: NewBusinessCardComponent },
  { path: "new/:id", component: NewBusinessCardComponent },
  { path: "cards", component: BusinessCardsComponent },
  { path: "search", component: BusinessCardsComponent },
  { path: "test", component: TestTableComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
