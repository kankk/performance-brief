export declare class Performance {
  constructor (options?: PerformanceOption);

  private options: PerformanceOption;
  private performance: any
  private analyzer: any

  run(): void;
  getTimingReport(): void;
}

export interface PerformanceOption {
  
}