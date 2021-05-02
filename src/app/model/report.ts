export class Report{
    
    private reportId: number;
    private reportStatus: string;
    private reportTitle: string;
    private companyName: string;

    constructor(reportId: number, reportStatus: string, reportTitle: string, companyName:string) {
        this.reportId = reportId;
        this.reportStatus = reportStatus;
        this.reportTitle = reportTitle;
        this.companyName = companyName;
    }

    getCompanyName(): string {
        return this.companyName;
    }

    getReportId(): number {
        return this.reportId;
    }

    getReportStatus(): string {
        return this.reportStatus;
    }

    getReportTitle(): string {
        return this.reportTitle;
    }
}