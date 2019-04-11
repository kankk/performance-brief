class Performance {

  options: Object
  performance: any

  constructor(options = {}) {
    this.options = options;
    console.log('performance init');

    this.performance = window.performance;

    if (!this.performance) {
      console.log('当前浏览器不支持performance');
      return;
    }

    console.log(this.performance);
  }

  run() {
    console.log('performance run');
  }
}

export default Performance;