describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForPageLoad();
  });

  it('should load home page successfully', () => {
    cy.get('body').should('be.visible');
    cy.title().should('not.be.empty');
    cy.url().should('include', 'demoqa.com');
  });

  it('should display navigation menu', () => {
    cy.get('.navbar-nav').should('be.visible');
    cy.get('.navbar-nav a').should('have.length.greaterThan', 0);
  });

  it('should have working search functionality', () => {
    const searchTerm = 'laptop';
    cy.get('#search').type(searchTerm);
    cy.get('.search-button').click();
    cy.url().should('include', 'search');
  });

  it('should display featured products', () => {
    cy.get('.featured-products').should('be.visible');
    cy.get('.product-card').should('have.length.greaterThan', 0);
  });

  it('should allow adding products to cart', () => {
    cy.get('.add-to-cart').first().click();
    cy.get('.cart-count').should('contain', '1');
  });

  it('should have responsive design', () => {
    cy.setMobileViewport();
    cy.get('.navbar-toggler').should('be.visible');
    
    cy.setTabletViewport();
    cy.get('.navbar-nav').should('be.visible');
    
    cy.setDesktopViewport();
    cy.get('.navbar-nav').should('be.visible');
  });

  it('should validate form inputs', () => {
    cy.get('#newsletter-email').type('invalid-email');
    cy.get('#newsletter-subscribe').click();
    cy.get('.error-message').should('be.visible');
  });

  it('should handle user interactions', () => {
    cy.get('.product-card').first().hover();
    cy.get('.add-to-wishlist').should('be.visible');
    
    cy.get('.product-card').first().click();
    cy.url().should('include', '/product/');
  });
});
