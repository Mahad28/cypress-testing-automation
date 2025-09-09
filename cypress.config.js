const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Base URL for the application under test
    baseUrl: 'https://demoqa.com',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Video and screenshot settings
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    
    // Timeout settings
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Retry settings
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Browser settings
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    
    // Test settings
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    
    // Environment variables
    env: {
      // API URLs
      apiBaseUrl: 'https://jsonplaceholder.typicode.com',
      authApiUrl: 'https://reqres.in/api',
      
      // Test data
      testUser: {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe'
      },
      
      // Feature flags
      enableVisualTesting: true,
      enableApiTesting: true,
      enableCrossBrowserTesting: true
    },
    
    setupNodeEvents(on, config) {
      // Allure reporter
      require('cypress-allure-plugin/on')(on);
      
      // Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Custom tasks
      on('task', {
        // Custom task to generate test data
        generateTestData() {
          const faker = require('faker');
          return {
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode()
          };
        },
        
        // Custom task to log messages
        log(message) {
          console.log(message);
          return null;
        },
        
        // Custom task to read file
        readFile(filename) {
          const fs = require('fs');
          return fs.readFileSync(filename, 'utf8');
        },
        
        // Custom task to write file
        writeFile({ filename, content }) {
          const fs = require('fs');
          fs.writeFileSync(filename, content);
          return null;
        }
      });
      
      // Browser launch options
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--disable-features=VizDisplayCompositor');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
        }
        
        if (browser.name === 'firefox') {
          launchOptions.preferences['media.navigator.streams.fake'] = true;
          launchOptions.preferences['media.navigator.permission.disabled'] = true;
        }
        
        return launchOptions;
      });
      
      // Custom viewport for different test types
      on('before:run', (details) => {
        if (details.specs && details.specs.some(spec => spec.includes('mobile'))) {
          config.viewportWidth = 375;
          config.viewportHeight = 667;
        }
      });
      
      return config;
    }
  },
  
  // Component testing configuration
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.js'
  }
});
