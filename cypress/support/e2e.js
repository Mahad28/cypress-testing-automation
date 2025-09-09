// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import page objects
import './page-objects/HomePage';
import './page-objects/LoginPage';
import './page-objects/ProductPage';

// Import custom commands
import 'cypress-real-events';
import 'cypress-file-upload';
import 'cypress-wait-until';
import 'cypress-iframe';
import 'cypress-plugin-tab';
import 'cypress-downloadfile';
import 'cypress-localstorage-commands';
import 'cypress-network-idle';
import 'cypress-promise';
import 'cypress-axe';

// Configure Allure reporter
import 'cypress-allure-plugin/commands';

// Configure Mochawesome reporter
import 'cypress-mochawesome-reporter/commands';

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions
  return false;
});

// Custom viewport for mobile testing
Cypress.Commands.add('setMobileViewport', () => {
  cy.viewport(375, 667);
});

// Custom viewport for tablet testing
Cypress.Commands.add('setTabletViewport', () => {
  cy.viewport(768, 1024);
});

// Custom viewport for desktop testing
Cypress.Commands.add('setDesktopViewport', () => {
  cy.viewport(1280, 720);
});
