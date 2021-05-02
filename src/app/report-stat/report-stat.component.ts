import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetail } from '../model/companyDetail';
import { CompanyDataServiceService } from '../service/company-data-service.service';
import { faChevronDown, faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-stat',
  templateUrl: './report-stat.component.html',
  styleUrls: ['./report-stat.component.css']
})
export class ReportStatComponent implements OnInit {

  featureArrowIcon: IconDefinition;
  highedLightArrowIcon: IconDefinition;
  fileManagerArrowIcon: IconDefinition;

  showSummary: Boolean = true;
  showFeature: Boolean = true;
  showHighLighted: Boolean = true;
  showFileManager: Boolean = true;
  
  company: CompanyDetail;
  

  constructor(private route: ActivatedRoute, private router: Router, private companyDataServiceService: CompanyDataServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('companyId');
    this.company = this.companyDataServiceService.getCompanyDataById(parseInt(id));

    this.featureArrowIcon = faChevronDown;
    this.highedLightArrowIcon = faChevronDown;
    this.fileManagerArrowIcon = faChevronDown;
  }

  onFeatureSelected(event: any) {
    if(event.target.outerText.startsWith("Fund")) {
      this.showFeature = !this.showFeature;
      this.featureArrowIcon = this.showFeature ? faChevronDown : faChevronRight;
    }
  }

  onHighLightedSelected(event: any) {
    if(event.target.outerText.startsWith("Highlighted")) {
      this.showHighLighted = !this.showHighLighted;
      this.highedLightArrowIcon = this.showHighLighted ? faChevronDown : faChevronRight;
    }
  }

  onFileManagerSelected(event: any) {
    if(event.target.outerText.startsWith("File")) {
      this.showFileManager = !this.showFileManager;
      this.fileManagerArrowIcon = this.showFileManager ? faChevronDown : faChevronRight;
    }
  }

  onMainMenuSelected(event: any) {
    const mainMenu = event.target.outerText;
    console.log(event.target.outerText);
    if(mainMenu === "Investment Summary") {
      this.router.navigate(['investment-summary']);
    }
  }

}
