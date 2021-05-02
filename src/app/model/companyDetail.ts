import { Report } from "./report";

export class CompanyDetail{
    private companyId: number;
    private companyName: string;
    private iconImagePath: string;
    private reportStatuses: Report[];

    constructor(companyId: number, companyName: string, iconImagePath: string, reportStatuses: Report[]) {
        this.companyId = companyId;
        this.companyName = companyName;
        this.iconImagePath = iconImagePath;
        this.reportStatuses = reportStatuses;
    }

    getCompanyId():number {
        return this.companyId;
    }

    getCompanyName(): string {
        return this.companyName;
    }

    getIconImagePath(): string {
        return this.iconImagePath;
    }

    getReportStatuses(): Report[] {
        return this.reportStatuses;
    }
}