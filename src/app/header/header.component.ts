import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import Typed from "typed.js";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("typed") typed: ElementRef;
  title: string = "Sadi Mahmud";
  constructor() {}

  ngOnInit() {
    console.log(this.typed);
    new Typed(this.typed.nativeElement, {
      strings: [
        "I work with js, php, python",
        "Love# react(+native), angular, sails, express, ionic, laravel, django",
        "Leisure# play games and listen to music",
        "Hobby# travelling"
      ],
      smartBackspace: true,
      typeSpeed: 30,
      backSpeed: 10,
      loop: true,
      loopCount: Infinity
    });
  }
}
