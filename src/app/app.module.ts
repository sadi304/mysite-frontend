import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { MomentModule } from "ngx-moment";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from ".//app-routing.module";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { CreateComponent } from "./blog/create/create.component";
import { CreatePostFormComponent } from "./create-post-form/create-post-form.component";

import { NgProgressModule } from "@ngx-progressbar/core";
import { StripHtmlPipe } from "./strip-html.pipe";
import { BlogDetailComponent } from "./blog/blog-detail/blog-detail.component";
import { ReadTimePipe } from "./read-time.pipe";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    BlogComponent,
    CreateComponent,
    CreatePostFormComponent,
    StripHtmlPipe,
    BlogDetailComponent,
    ReadTimePipe,
    LoginComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgProgressModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
