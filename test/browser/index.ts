import Performance from '../../src/index';
import report from './report';

const performance = new Performance();
performance.run().then(() => {
  report.add(performance.getTimingReport(), 'Timing Report')
}).catch(err => console.log(err));

report.add();