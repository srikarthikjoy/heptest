import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { AuthGuard } from "./auth/auth.guard";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "feature", component: FeatureComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent },
  { path: "pricing", component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
