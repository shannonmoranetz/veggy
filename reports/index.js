var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/summary.json',
  output: 'reports/summary.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version":"0.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "Web",
  }
};

reporter.generate(options);
