import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetail } from '../model/companyDetail';
import { CompanyDataServiceService } from '../service/company-data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  companyDetails: CompanyDetail[];

  constructor(private router:Router, private companyDataServiceService: CompanyDataServiceService) {}

  ngOnInit(): void {
    this.companyDetails = this.companyDataServiceService.getAllCompanyData();
  }

  onCardSelected(companyDetail: CompanyDetail) {
    this.router.navigate(['report-stat', companyDetail.getCompanyId()]);
  }

}
