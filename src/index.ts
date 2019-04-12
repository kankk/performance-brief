import { PerformanceOption } from "../types";

class Performance {

  private options: PerformanceOption
  private performance: any
  private report: string

  constructor(options: PerformanceOption = {}) {
    this.options = Object.assign({
      whitePageLimit: 100,
      whitePageLimitCallback: null
    }, options);

    this.performance = window.performance;

    if (!this.performance) {
      console.log('当前浏览器不支持performance');
      return;
    }
  }
  
  /**
   * 初始化
   *
   * @memberof Performance
   */
  init() {
    this.displayTiming();
  }

  
  /**
   *  计算时间点
   *
   * @private
   * @memberof Performance
   */
  private displayTiming() {
    const timing = this.performance.timing; // 关键点时间
    const {
      navigationStart,  // 表征了从同一个浏览器上下文的上一个文档卸载结束时的时间戳. 如果没有上一个文档, 这个值和fetchStart相同
      redirectStart,  // 表征了第一个HTTP重定向开始时的时间戳. 如果没有重定向, 或者重定向中的一个不同源, 这个值为0
      redirectEnd,  // 表征了最后一个HTTP重定向完成时的时间戳, 如果没有重定向, 或者重定向中的一个不同源, 这个值为0
      fetchStart, // 表征了浏览器准备好实用HTTP请求来获取文档的时间戳, 这个时间点会在检查任何应用缓存之前
      domainLookupStart,  // 表征了域名查询开始的时间戳. 如果使用了持续连接, 或者这个信息存储到了缓存/本地资源上, 这个值和fetchStart一样
      domainLookupEnd,  // 表征了域名查询结束的时间戳. 如果使用了持续连接, 或者这个信息存储到了缓存/本地资源上, 这个值和fetchStart一样 
      connectStart, // 返回HTTP请求开始向服务器发送的时间戳, 如果使用了持续连接, 则返回值等同于fetchStart的值
      connectEnd, // 返回浏览器与服务器之间的连接建立时的时间戳, 如果是持久连接, 则返回值等同于fetchStart的值. 连接建立指的是所有握手和认证过程全部结束
      requestStart, // 返回浏览器向服务器发出HTTP请求时的时间戳
      responseStart,  // 返回浏览器从服务器收到第一个字节的时间戳. 如果传输层开始请求之后失败并且连接被重开, 该属性将会被数制成新的请求的相对应的发起时间
      responseEnd,  // 返回浏览器从服务器收到最后一个字节的时间戳
      unloadEventStart, // 表征了unload事件抛出时的时间戳
      unloadEventEnd, // 表征了unload事件完成时的时间戳
      domLoading, // 返回当前网页DOM结构开始解析时(即Document.readyState属性变成loading)的时间戳
      domInteractive, // 返回当前网页DOM结构结束解析, 开始加载内嵌资源时(即Document.readyState属性变成interactive)的时间戳
      domContentLoadedEventStart, // 返回当解析器发送DOMContentLoaded事件, 即所有需要被执行的脚本已经被解析时的时间戳
      domContentLoadedEventEnd, // 返回当所有需要立即执行的脚本已经被执行时的时间戳
      domComplete,  // 返回当前文档解析完成(即Document.readyState变成complete)的时间戳
      loadEventStart, // 返回该文档下, load事件被发送时的时间戳, 如果这个事件还未被发送, 它的值将会是0
      loadEventEnd, // 返回当load事件结束, 即加载时间完成的时间戳. 如果这个事件还未被发送, 或者尚未完成, 它的值将会是0
      secureConnectionStart,  // 返回浏览器与服务器开始安全链接的握手时的时间戳, 如果当前网页不要求安全连接, 则返回0
    } = timing;

    const whitePageTime = responseStart - navigationStart;

    if (whitePageTime > this.options.whitePageLimit) {
      if (typeof this.options.whitePageLimitCallback === 'function') {
        this.options.whitePageLimitCallback();
      } else {
        console.log('白屏时间超过了限制');
      }
    }

    this.report = `------------------
  重定向耗时: ${redirectEnd - redirectStart}
  DNS查询耗时: ${domainLookupEnd - domainLookupStart}
  TCP链接耗时: ${connectEnd - connectStart}
  HTTP请求耗时: ${responseEnd - responseStart}
  解析dom树耗时: ${domComplete - domInteractive}
  白屏耗时: ${whitePageTime}
------------------`;
  }

  /**
   * 获取Performance报告
   *
   * @returns
   * @memberof Performance
   */
  getReportText() {
    return this.report;
  }

  /**
   * 获取白屏时间
   *
   * @returns
   * @memberof Performance
   */
  getWhitePageTime() {
    const {
      responseStart,
      navigationStart
    } = this.performance.timing;

    return responseStart - navigationStart;
  }
}

export default Performance;