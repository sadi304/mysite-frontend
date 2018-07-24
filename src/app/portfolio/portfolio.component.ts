import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../portfolio.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  portfolios;

  constructor(private portfolioService: PortfolioService) {}

  getPortfolios() {
    this.portfolioService.getPortfolios().subscribe(portfolios => {
      this.portfolios = portfolios;
    });
  }
  ngOnInit() {
    this.getPortfolios();
  }
}
