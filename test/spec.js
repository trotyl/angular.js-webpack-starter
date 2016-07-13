require('../src/app')

const testsContext = require.context('../src/app', true, /spec/);
testsContext.keys().forEach(testsContext);