require('../src/app')

const testsContext = require.context('.', true, /spec/);
testsContext.keys().forEach(testsContext);