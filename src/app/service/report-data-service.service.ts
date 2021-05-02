import { Injectable } from '@angular/core';
import { GoogleReportProperty } from '../model/google-report-property';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {

  private googlePieChartReportDataMap = new Map();
  private googleLineChartReportDataMap = new Map();

  constructor() { 
    this.populatePieChartGoogleProps();
    this.populateLineChartGoogleProps();
  }

  private populateLineChartGoogleProps(): void {
    let lineChartData1 = new GoogleReportProperty();
    lineChartData1.setTitle("Investments by quarter");
    lineChartData1.setData([
        ['2015', 100, 150],
        ['2016', 150, 200],
        ['2017', 200, 250],
        ['2018', 250, 300],
        ['2019', 300, 350],
        ['2020', 350, 400],
        ['2021', 400, 450],
        ['2022', 450, 500]
      ]);
    lineChartData1.setType("LineChart");
    lineChartData1.setColumnNames(['Year','Cumulative investment cost', 'Cumulative total value']);
    lineChartData1.setOptions({
      hAxis: {
        title: 'Year'
      },
      vAxis:{
        title: 'USD(M)'
      },
      pointSize:5
    });

    this.googleLineChartReportDataMap.set(1001, lineChartData1);

    let lineChartData2 = new GoogleReportProperty();
    lineChartData2.setTitle("Investments by quarter");
    lineChartData2.setData([
        ['2015', 200, 150],
        ['2016', 250, 200],
        ['2017', 250, 250],
        ['2018', 300, 250],
        ['2019', 300, 350],
        ['2020', 550, 400],
        ['2021', 600, 450],
        ['2022', 650, 500]
      ]);
    lineChartData2.setType("LineChart");
    lineChartData2.setColumnNames(['Year', 'Cumulative investment cost', 'Cumulative total value']);
    lineChartData2.setOptions({
      hAxis: {
        title: 'Year'
      },
      vAxis:{
        title: 'USD(M)'
      },
      pointSize:5
    });

    this.googleLineChartReportDataMap.set(1002, lineChartData2);

    let lineChartData3 = new GoogleReportProperty();
    lineChartData3.setTitle("Investments by quarter");
    lineChartData3.setData([
        ['2015', 200, 150],
        ['2016', 250, 200],
        ['2017', 250, 250],
        ['2018', 300, 250],
        ['2019', 300, 350],
        ['2020', 550, 400],
        ['2021', 600, 450],
        ['2022', 650, 500]
    ]);
    lineChartData3.setType("LineChart");
    lineChartData3.setColumnNames(['Year','Cumulative investment cost', 'Cumulative total value']);
    lineChartData3.setOptions({
      hAxis: {
        title: 'Year'
      },
      vAxis:{
        title: 'USD(M)'
      },
      pointSize:5
    });

    this.googleLineChartReportDataMap.set(1003, lineChartData3);
  }

  private populatePieChartGoogleProps(): void {
    let pieChartData1 = new GoogleReportProperty();
      pieChartData1.setTitle("Deal allocation [number of assets]");
      pieChartData1.setData([
        ['Energy', 1],
        ['Consumer Durables & Apparel', 1],
        ['Consumer Services', 1],
        ['Insurance', 1],
        ['Materials', 1],
        ['Software & Services', 1],
        ['Technology Hardware & Equipment', 1],
        ['Health Care Equipment & Services', 1]
      ]);
      pieChartData1.setType("PieChart");
      pieChartData1.setColumnNames([]);
      pieChartData1.setOptions({pieHole:0.4});

      this.googlePieChartReportDataMap.set(1001, pieChartData1);

      let pieChartData2 = new GoogleReportProperty();
      pieChartData2.setTitle("Deal allocation [number of assets]");
      pieChartData2.setData([
        ['Energy', 2],
        ['Consumer Durables & Apparel', 2],
        ['Consumer Services', 2],
        ['Insurance', 2],
        ['Materials', 2],
        ['Software & Services', 2],
        ['Technology Hardware & Equipment', 2],
        ['Health Care Equipment & Services', 2]
      ]);
      pieChartData2.setType("PieChart");
      pieChartData2.setColumnNames([]);
      pieChartData2.setOptions({pieHole:0.4});

      this.googlePieChartReportDataMap.set(1002, pieChartData2);

      let pieChartData3 = new GoogleReportProperty();
      pieChartData3.setTitle("Deal allocation [number of assets]");
      pieChartData3.setData([
        ['Energy', 3],
        ['Consumer Durables & Apparel', 3],
        ['Consumer Services', 3],
        ['Insurance', 3],
        ['Materials', 3],
        ['Software & Services', 2],
        ['Technology Hardware & Equipment', 3],
        ['Health Care Equipment & Services', 3]
      ]);
      pieChartData3.setType("PieChart");
      pieChartData3.setColumnNames([]);
      pieChartData3.setOptions({pieHole:0.4});

      this.googlePieChartReportDataMap.set(1003, pieChartData3);
  }

  getGooglePieChartPropertyByReportId(reportId: number): GoogleReportProperty {
    return this.googlePieChartReportDataMap.get(reportId);
  }

  getGoogleLineChartPropertyByReportId(reportId: number): GoogleReportProperty {
    return this.googleLineChartReportDataMap.get(reportId);
  }
}
