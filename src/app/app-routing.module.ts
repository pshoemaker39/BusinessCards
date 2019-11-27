import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NewBusinessCardComponent } from "./new-business-card/new-business-card.component";
import { BusinessCardsComponent } from "./business-cards/business-cards.component";
import { WebCamComponent } from "./web-cam/web-cam.component";
import { TestTableComponent } from "./test-table/test-table.component";
import { AuthGuard } from "./auth-gaurd";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "new",
    component: NewBusinessCardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "new/:id",
    component: NewBusinessCardComponent,
    canActivate: [AuthGuard]
  },
  { path: "cam", component: WebCamComponent, canActivate: [AuthGuard] },
  {
    path: "cards",
    component: BusinessCardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "search",
    component: BusinessCardsComponent,
    canActivate: [AuthGuard]
  },
  { path: "test", component: TestTableComponent },
  { path: "error", component: NotFoundComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
