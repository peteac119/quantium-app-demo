export class GoogleReportProperty {
    private title: string;
    private type: string;
    private data: Array<Array<any>>;
    private columnNames: Array<String>;
    private options: any;
    
    setTitle(title: string): void {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setType(type: string): void {
        this.type = type;
    }

    getType(): string {
        return this.type;
    }

    setData(data: Array<Array<any>>) {
        this.data = data;
    }

    getData(): Array<Array<any>> {
        return this.data;
    }

    setColumnNames(columnNames:Array<String>) {
        this.columnNames = columnNames;
    }

    getColumnNames(): Array<String> {
        return this.columnNames;
    }

    setOptions(options: any) {
        this.options = options;
    }

    getOptions(): any {
        return this.options;
    }
}