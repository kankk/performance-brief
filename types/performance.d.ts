export declare class Performance {
  constructor (options?: PerformanceOption);

  private options: PerformanceOption;
  private performance: any
  private timingReportText: string

  init(): void;
  getTimingReport(): TimingReport;
  getTimingReportText(): string;
  getEntryReport(): EntryReport[];
  getEntryReportText(): string;
  getWhitePageTime(): number;
  
  private generateTimingReport(): void;
}

export interface PerformanceOption {
  /**
   * 白屏时间限制阈值(毫秒)
   *
   * @type {number}
   * @memberof PerformanceOption
   */
  whitePageLimit?: number;
  /**
   * 白屏时间超过限制阈值触发的回调函数
   *
   * @type {Function}
   * @memberof PerformanceOption
   */
  whitePageLimitCallback?: Function;
}

export interface TimingReport {

}

export interface EntryReport {
  name: string,
  initiatorType: string,
  entryType: string,
  duration: number,
  size: number,
}