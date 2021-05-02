import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Report } from 'src/app/model/report';
import { ReportDataService } from 'src/app/service/report-data-service.service';
import { GoogleReportProperty } from 'src/app/model/google-report-property';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {

  faBars = faBars;
  currentReport: Report;
  pieChartProperties: GoogleReportProperty;
  lineChartProperties: GoogleReportProperty;

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {      
    pieHole:0.4
  };

  constructor(private router:Router, public reportDataService: ReportDataService ) { 
    this.currentReport = this.router.getCurrentNavigation().extras.state as Report;
  }

  ngOnInit(): void {
    this.pieChartProperties = this.reportDataService.getGooglePieChartPropertyByReportId(this.currentReport.getReportId());
    this.lineChartProperties = this.reportDataService.getGoogleLineChartPropertyByReportId(this.currentReport.getReportId());
    console.log(this.lineChartProperties);
  }

}
