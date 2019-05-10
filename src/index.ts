import { PerformanceOption } from "../types";
import Analyzer from "./Analyzer";

const notSupportErrorInfo = '当前浏览器不支持performance';

class Performance {

  private options: PerformanceOption
  private performance: any
  constructor(options: PerformanceOption = {}) {
    this.options = Object.assign({
    }, options);
  }

  /**
   * 执行性能测试
   *
   * @memberof Performance
   */
  run() {
    return new Promise((resolve, reject) => {
      try {
        if (!window.performance) {
          console.log(notSupportErrorInfo);
          reject(new Error(notSupportErrorInfo));
        } else {
          const loadHandler = () => {
            setTimeout(() => {
              this.performance = window.performance;
              window.removeEventListener('load', loadHandler);
              const analyzer = new Analyzer(this.performance);
              const report = analyzer.report();
              resolve(this);
            }, 0)
          }
          window.addEventListener('load', loadHandler);
        }
      } catch (err) {
        reject(err);
      }
    })
  }
}

export default Performance;