# Cypress Testing Automation Framework

A modern and comprehensive web testing framework using Cypress for demonstrating cutting-edge test automation capabilities with real-time debugging and visual testing.

## 🚀 Features

- **Cypress Framework**: Modern JavaScript-based testing with real-time debugging
- **Visual Testing**: Screenshot and video capture with automatic retries
- **API Testing**: Built-in API testing capabilities with cy.request()
- **Cross-Browser Testing**: Chrome, Firefox, Edge, and Electron support
- **Data-Driven Testing**: JSON, CSV, and database data sources
- **Custom Commands**: Reusable custom commands for common operations
- **Dashboard Integration**: Cypress Dashboard for test analytics and insights
- **CI/CD Ready**: GitHub Actions and Jenkins integration

## 🛠️ Technologies Used

- Cypress 13.6.0
- Node.js 18+
- JavaScript ES6+
- Mocha (test runner)
- Chai (assertions)
- Cucumber (BDD support)
- Allure reporting

## 📁 Project Structure

```
cypress-testing-automation/
├── cypress/
│   ├── e2e/                    # End-to-end tests
│   │   ├── ui/                 # UI tests
│   │   ├── api/                # API tests
│   │   └── integration/        # Integration tests
│   ├── fixtures/               # Test data files
│   ├── support/                # Custom commands and utilities
│   │   ├── commands.js         # Custom commands
│   │   ├── e2e.js             # Support file
│   │   └── page-objects/       # Page Object Model
│   └── screenshots/            # Screenshot captures
├── cypress.config.js           # Cypress configuration
├── package.json                # Dependencies and scripts
└── README.md
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cypress-testing-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests in headed mode**
   ```bash
   npm run cypress:open
   ```

4. **Run tests in headless mode**
   ```bash
   npm run cypress:run
   ```

5. **Run specific test suite**
   ```bash
   npm run test:ui
   npm run test:api
   ```

## 🌐 Test Coverage

- **E-commerce Testing**: Complete shopping flow, cart management, checkout
- **Form Validation**: Registration, login, contact forms with validation
- **API Testing**: REST API validation with cy.request()
- **Visual Regression**: Screenshot comparison and visual testing
- **Cross-Browser Testing**: Chrome, Firefox, Edge compatibility
- **Performance Testing**: Page load times and performance metrics
- **Accessibility Testing**: WCAG compliance and accessibility checks

## 🔧 Configuration

Update `cypress.config.js` for environment settings:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  }
};
```

## 📊 Reports

- **Cypress Dashboard**: Real-time test execution and analytics
- **Allure Reports**: Detailed test reports with screenshots
- **Mochawesome**: HTML test reports
- **JUnit Reports**: CI/CD integration reports

## 🎯 Test Scenarios

### UI Testing
- User registration and login flows
- Product search and filtering
- Shopping cart operations
- Checkout process validation
- Form submission and validation
- Navigation and menu testing

### API Testing
- REST API endpoint validation
- Authentication and authorization
- Data validation and schema checking
- Error handling and status codes
- Performance and response times

### Visual Testing
- Screenshot comparison
- Visual regression detection
- Cross-browser visual consistency
- Responsive design validation

## 🚀 Advanced Features

### Custom Commands
```javascript
// Custom login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=login-button]').click();
});
```

### Page Object Model
```javascript
// Login page object
class LoginPage {
  get emailInput() { return cy.get('[data-cy=email]'); }
  get passwordInput() { return cy.get('[data-cy=password]'); }
  get loginButton() { return cy.get('[data-cy=login-button]'); }
  
  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}
```

### Data-Driven Testing
```javascript
// Using fixtures for test data
cy.fixture('users').then((users) => {
  users.forEach((user) => {
    cy.login(user.email, user.password);
  });
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your test cases
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mahad Siddiqui** - Senior Test Automation Engineer
- GitHub: [@Mahad28](https://github.com/Mahad28)
- Upwork: [Profile](https://www.upwork.com/freelancers/~0184717814212a8366)
- Email: mahadsiddiqui@gmail.com
