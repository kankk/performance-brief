import Performance from '../../src/index';

const performance = new Performance();
performance.run().then().catch(err => console.log(err));