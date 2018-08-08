import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./auth.guard";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { CreateComponent } from "./blog/create/create.component";
import { BlogDetailComponent } from "./blog/blog-detail/blog-detail.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  {
    path: "blog",
    children: [
      { path: "", component: BlogComponent },
      { path: "create", component: CreateComponent, canActivate: [AuthGuard] },
      { path: "detail/:id", component: BlogDetailComponent }
    ]
  },
  { path: "", redirectTo: "/portfolio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
