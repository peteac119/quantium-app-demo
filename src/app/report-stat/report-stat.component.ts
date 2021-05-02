import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetail } from '../model/companyDetail';
import { CompanyDataServiceService } from '../service/company-data-service.service';

@Component({
  selector: 'app-report-stat',
  templateUrl: './report-stat.component.html',
  styleUrls: ['./report-stat.component.css']
})
export class ReportStatComponent implements OnInit {

  company: CompanyDetail;

  constructor(private route: ActivatedRoute, private router: Router, private companyDataServiceService: CompanyDataServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('companyId');
    this.company = this.companyDataServiceService.getCompanyDataById(parseInt(id));
  }

  onMainMenuSelected(event: any) {
    const mainMenu = event.target.outerText;
    console.log(event.target.outerText);
    if(mainMenu === "Investment Summary") {
      this.router.navigate(['investment-summary']);
    }
  }

}
