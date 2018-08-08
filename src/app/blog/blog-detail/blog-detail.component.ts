import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PortfolioService } from "../../portfolio.service";
import { environment } from "../../../environments/environment";
import { NgProgressComponent } from "@ngx-progressbar/core";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.css"]
})
export class BlogDetailComponent implements OnInit {
  url = environment.url;
  post;
  loading = true;

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(
    private _service: PortfolioService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.progressBar.start();
  }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = +this.route.snapshot.paramMap.get("id");
    this._service.getPost(id).subscribe(
      post => {
        this.post = post;
        this.progressBar.complete();
        this.loading = false;
        console.log(this.progressBar);
      },
      () => this.progressBar.complete()
    );
  }
}
