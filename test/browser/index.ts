import { PerformanceOption } from './../../types/performance.d';
import Performance from '../../src/index';

const options: PerformanceOption = {
  whitePageLimit: 10,
  whitePageLimitCallback: () => {
    const whitePageError: Element = document.createElement('p');
    const errorMessage: string = '白屏时间超过了限制';
    console.log(errorMessage);
    whitePageError.innerHTML = errorMessage;
    document.body.appendChild(whitePageError);
  }
}

const performance = new Performance(options);

performance.init();

const performanceReport = document.getElementById('performance-report');
performanceReport.innerHTML = performance.getTimingReportText();

const entryReport = document.getElementById('entry-report');
entryReport.innerHTML = performance.getEntryReportText();

console.log(performance.getTimingReport());
console.log(performance.getEntryReport());