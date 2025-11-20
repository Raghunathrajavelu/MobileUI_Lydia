## Project Overview

This project automates the **Wikipedia Android mobile app** using:

- **WebdriverIO v9** (Test runner)  
- **Appium** (Mobile automation)  
- **TypeScript** (Strong typing)  
- **Cucumber BDD** (Gherkin-style scenarios)  
- **Allure Reporter** (Test reporting)  

### Test Scenario

1. Complete onboarding screens.  
2. Search for "Lydia" and select the city result.  
3. Dismiss any popups.  
4. Change the language to French and verify translation.  
5. Scroll to "Crésus," open it in a new tab, and validate the page.  
6. Verify the presence of the header image on the page.

---

## Folder Structure
wdio-appium-project/
│
├─ src/
│ ├─ features/ # Gherkin feature files
│ ├─ pages/ # Page Object Models
│ └─ step-definitions/ # Step definitions
│
├─ wdio.conf.ts # WebdriverIO configuration
├─ package.json
├─ tsconfig.json
└─ README.md

---

## Prerequisites

- Node.js >= 18.x  
- Android Emulator or physical device (API level 12+)  
- Appium (CLI or Desktop)  
- VS Code (recommended)  

---

## Installation

1. Clone the repository:
git clone <repository-url>
cd wdio-appium-project

Install dependencies:
npm install


Start Appium server:
appium

## Running Tests
npx wdio run wdio.conf.ts


Runs tests on the configured Android device/emulator.
Screenshots on failures are saved in errorShots/.

Allure Reporting

Generate Allure report after test execution:
allure generate allure-results --clean -o allure-report


Serve the report:
allure open allure-report









