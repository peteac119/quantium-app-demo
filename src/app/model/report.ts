export class Report{
    private reportId: number;
    private reportStatus: string;
    private reportTitle: string;

    constructor(reportId: number, reportStatus: string, reportTitle: string) {
        this.reportId = reportId;
        this.reportStatus = reportStatus;
        this.reportTitle = reportTitle;
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