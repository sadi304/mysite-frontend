import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../portfolio.service";

@Component({
  selector: "app-create-post-form",
  templateUrl: "./create-post-form.component.html",
  styleUrls: ["./create-post-form.component.css"]
})
export class CreatePostFormComponent implements OnInit {
  editorContent = "";
  title = "";
  thumbnail: File;
  public options: object = {
    height: 300,
    events: {
      "froalaEditor.image.beforeUpload": (e, editor, files) => {
        if (files.length) {
          // Create a File Reader.
          var reader = new FileReader();

          // Set the reader to insert images when they are loaded.
          reader.onload = function(e) {
            var result = reader.result;
            editor.image.insert(result, null, null, editor.image.get());
          };

          // Read image as base64.
          reader.readAsDataURL(files[0]);
        }

        editor.popups.hideAll();

        // Stop default upload chain.
        return false;
      }
    }
  };

  onFileChanged(event) {
    this.thumbnail = event.target.files[0];
  }
  onSubmit(form) {
    let formData: FormData = new FormData();
    formData.append("title", form.value.title);
    formData.append("body", form.value.body);
    formData.append("category", "default");
    formData.append("thumbnail", this.thumbnail ? this.thumbnail : "");
    this.postData(formData);
  }

  constructor(private postPost: PortfolioService) {}

  postData(data) {
    this.postPost.postPost(data).subscribe(res => {
      alert("post created!");
    });
  }
  ngOnInit() {}
}
