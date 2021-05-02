import { Injectable } from '@angular/core';
import { CompanyDetail } from '../model/companyDetail';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataServiceService {

  private companyDataMap = new Map();

  constructor() {
    let ggvReportStatus1 = new Report(1001, "Reporting", "USD Fund V (Q1 2021)", "GGV");
    let ggvReportStatus2 = new Report(1002, "Reporting", "USD Fund VI (Q1 2021)", "GGV");

    let sequoiaReportStatus = new Report(1003, "Fundrasing", "USD Fund VI (First closing)", "Sequoia");


    let ggvDetail = new CompanyDetail(1, "GGV Capital Limited", "../../assets/images/GGVImage.png",[ggvReportStatus1, ggvReportStatus2]);
    let sequoiaDetail = new CompanyDetail(2, "Sequoia Venture Limited", "../../assets/images/sequoia-logo.png",[sequoiaReportStatus]);

    this.companyDataMap.set(ggvDetail.getCompanyId(), ggvDetail);
    this.companyDataMap.set(sequoiaDetail.getCompanyId(), sequoiaDetail);
  }

  getAllCompanyData(): CompanyDetail[] {
    return Array.from(this.companyDataMap.values());
  }

  getCompanyDataById(companyId: number): CompanyDetail {
    return this.companyDataMap.get(companyId);
  }

}
