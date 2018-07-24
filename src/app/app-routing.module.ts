import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "/portfolio", pathMatch: "full" },
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
