import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { CreateComponent } from "./blog/create/create.component";

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  {
    path: "blog",
    children: [
      { path: "", component: BlogComponent },
      { path: "create", component: CreateComponent }
    ]
  },
  { path: "", redirectTo: "/portfolio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
