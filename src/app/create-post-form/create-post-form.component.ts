import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../portfolio.service";

@Component({
  selector: "app-create-post-form",
  templateUrl: "./create-post-form.component.html",
  styleUrls: ["./create-post-form.component.css"]
})
export class CreatePostFormComponent implements OnInit {
  submitted = false;
  editorContent = "blaaa";
  name = "";
  onSubmit(data) {
    this.submitted = true;
    console.log(data.value);
    this.postData(data.value);
  }

  constructor(private postPost: PortfolioService) {}

  postData(data) {
    console.log("inlocal", data);
    this.postPost.postPost(data).subscribe(res => {
      console.log(res);
    });
  }
  ngOnInit() {}
}
