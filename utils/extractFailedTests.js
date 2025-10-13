// utils/extractFailedFromAllure.js
const fs = require('fs');
const path = require('path');

function getFailedTestsFromAllure() {
  const resultsDir = path.join(__dirname, '../allure-results');
  const files = fs.readdirSync(resultsDir);
  const failedTitles = [];

  for (const file of files) {
    if (file.endsWith('-result.json')) {
      const content = JSON.parse(fs.readFileSync(path.join(resultsDir, file), 'utf-8'));
      if (content.status === 'failed') {
        failedTitles.push(content.name);
      }
    }
  }

  return failedTitles;
}

module.exports = { getFailedTestsFromAllure };