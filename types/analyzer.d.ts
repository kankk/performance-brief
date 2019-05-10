export declare class Analyzer {

  private performance: any;
  private timingReport: TimingReport;

  report(): string;
}

export interface TimingReport {
  dns: TimingReportItem,
  tcp: TimingReportItem,
  ttfb: TimingReportItem,
  download: TimingReportItem,
  dom: TimingReportItem,
  white: TimingReportItem,
  domReady: TimingReportItem,
  load: TimingReportItem
}

export interface TimingReportItem {
  label: string,
  time: number,
  timeText: string,
}