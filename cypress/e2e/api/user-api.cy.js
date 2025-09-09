describe('User API Tests', () => {
  const baseUrl = Cypress.env('apiBaseUrl');
  
  it('should get all users', () => {
    cy.apiRequest('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.length.greaterThan(0);
    });
  });

  it('should get user by ID', () => {
    cy.apiRequest('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('email');
    });
  });

  it('should create a new user', () => {
    const newUser = {
      name: 'Mahad Siddiqui',
      username: 'mahad28',
      email: 'mahadsiddiqui@gmail.com'
    };

    cy.apiRequest('POST', '/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', newUser.name);
      expect(response.body).to.have.property('username', newUser.username);
      expect(response.body).to.have.property('email', newUser.email);
    });
  });

  it('should update an existing user', () => {
    const updatedUser = {
      name: 'Updated Mahad Siddiqui',
      username: 'updated_mahad28',
      email: 'updated.mahadsiddiqui@gmail.com'
    };

    cy.apiRequest('PUT', '/users/1', updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', updatedUser.name);
    });
  });

  it('should delete a user', () => {
    cy.apiRequest('DELETE', '/users/1').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should handle invalid user ID', () => {
    cy.apiRequest('GET', '/users/999999').then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should validate response time', () => {
    const startTime = Date.now();
    cy.apiRequest('GET', '/users').then((response) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      expect(responseTime).to.be.lessThan(3000);
    });
  });

  it('should validate JSON schema', () => {
    const userSchema = {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        username: { type: 'string' },
        email: { type: 'string' }
      },
      required: ['id', 'name', 'username', 'email']
    };

    cy.apiRequest('GET', '/users/1').then((response) => {
      cy.validateJsonSchema(response.body, userSchema);
    });
  });
});
