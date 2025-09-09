// Custom commands for Cypress testing

// Login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=login-button]').click();
  cy.url().should('include', '/dashboard');
});

// API request command
Cypress.Commands.add('apiRequest', (method, endpoint, body = null) => {
  return cy.request({
    method: method,
    url: `${Cypress.env('apiBaseUrl')}${endpoint}`,
    body: body,
    failOnStatusCode: false
  });
});

// Wait for element to be visible
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout: timeout }).should('be.visible');
});

// Clear and type text
Cypress.Commands.add('clearAndType', (selector, text) => {
  cy.get(selector).clear().type(text);
});

// Select dropdown option
Cypress.Commands.add('selectOption', (selector, option) => {
  cy.get(selector).select(option);
});

// Upload file
Cypress.Commands.add('uploadFile', (selector, filePath) => {
  cy.get(selector).attachFile(filePath);
});

// Take screenshot with custom name
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name);
});

// Wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().its('document.readyState').should('equal', 'complete');
});

// Scroll to element
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView();
});

// Hover over element
Cypress.Commands.add('hoverElement', (selector) => {
  cy.get(selector).trigger('mouseover');
});

// Double click element
Cypress.Commands.add('doubleClickElement', (selector) => {
  cy.get(selector).dblclick();
});

// Right click element
Cypress.Commands.add('rightClickElement', (selector) => {
  cy.get(selector).rightclick();
});

// Drag and drop
Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
  cy.get(sourceSelector).trigger('dragstart');
  cy.get(targetSelector).trigger('drop');
});

// Check accessibility
Cypress.Commands.add('checkAccessibility', () => {
  cy.injectAxe();
  cy.checkA11y();
});

// Generate random email
Cypress.Commands.add('generateRandomEmail', () => {
  const timestamp = Date.now();
  return `test${timestamp}@example.com`;
});

// Generate random string
Cypress.Commands.add('generateRandomString', (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
});

// Wait for API response
Cypress.Commands.add('waitForApiResponse', (alias) => {
  cy.wait(alias);
});

// Mock API response
Cypress.Commands.add('mockApiResponse', (method, url, response) => {
  cy.intercept(method, url, response).as('mockedResponse');
});

// Validate JSON schema
Cypress.Commands.add('validateJsonSchema', (response, schema) => {
  cy.wrap(response).should('jsonSchema', schema);
});

// Check console errors
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    const errors = win.console.error;
    expect(errors).to.be.undefined;
  });
});

// Set local storage
Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.window().then((win) => {
    win.localStorage.setItem(key, value);
  });
});

// Get local storage
Cypress.Commands.add('getLocalStorage', (key) => {
  cy.window().then((win) => {
    return win.localStorage.getItem(key);
  });
});

// Clear local storage
Cypress.Commands.add('clearLocalStorage', () => {
  cy.window().then((win) => {
    win.localStorage.clear();
  });
});

// Set session storage
Cypress.Commands.add('setSessionStorage', (key, value) => {
  cy.window().then((win) => {
    win.sessionStorage.setItem(key, value);
  });
});

// Get session storage
Cypress.Commands.add('getSessionStorage', (key) => {
  cy.window().then((win) => {
    return win.sessionStorage.getItem(key);
  });
});

// Clear session storage
Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});
