import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private _service: AuthService, public router: Router) {}

  ngOnInit() {}

  onSubmit(form) {
    this._service
      .login({
        username: form.value.username,
        password: form.value.password
      })
      .subscribe(res => {
        this._service.setToken(res);
        let redirect = this._service.redirectUrl
          ? this._service.redirectUrl
          : "/";
        // Redirect the user
        this.router.navigate([redirect]);
      });
  }
}
