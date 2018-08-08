import { Component, OnInit, ViewChild } from "@angular/core";
import { PortfolioService } from "../portfolio.service";
import { environment } from "../../environments/environment";
import { NgProgressComponent } from "@ngx-progressbar/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  url = environment.url;
  posts;

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(private _service: PortfolioService) {}

  ngAfterViewInit() {
    this.progressBar.start();
  }

  ngOnInit() {
    this._service.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.progressBar.complete();
      },
      () => this.progressBar.complete()
    );
  }
}
