export declare class Performance {
  constructor (options?: PerformanceOption);

  private options: PerformanceOption;
  private performance: any
  private report: string

  init(): void;
  getReportText(): string;
  getWhitePageTime(): number;
  
  private displayTiming(): void;
}

export interface PerformanceOption {
  
}