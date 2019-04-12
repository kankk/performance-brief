import Performance from '../../src/index';
const performance = new Performance();

performance.init();

const report = document.getElementById('report');
report.innerHTML = performance.getReportText();