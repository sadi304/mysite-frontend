import { Component, OnInit, ViewChild } from "@angular/core";
import { PortfolioService } from "../portfolio.service";
import { NgProgressComponent } from "@ngx-progressbar/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  portfolios;

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(private portfolioService: PortfolioService) {}

  ngAfterViewInit() {
    this.progressBar.start();
  }
  getPortfolios() {
    this.portfolioService.getPortfolios().subscribe(
      portfolios => {
        this.portfolios = portfolios;
        this.progressBar.complete();
      },
      () => this.progressBar.complete()
    );
  }
  ngOnInit() {
    this.getPortfolios();
  }
}
