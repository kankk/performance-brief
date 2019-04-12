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