// scripts/rerunFailed.js
const { getFailedTestsFromAllure } = require('../utils/extractFailedTests');
const { execSync } = require('child_process');

const failedTests = getFailedTestsFromAllure();

if (failedTests.length === 0) {
  console.log('✅ No failed tests to rerun.');
  process.exit(0);
}

for (const title of failedTests) {
  console.log(`🔁 Rerunning failed test: "${title}"`);
  try {
    execSync(`npx playwright test --config playwright.config3.js --grep "${title}"`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`❌ Failed to rerun test: "${title}"`);
  }
}