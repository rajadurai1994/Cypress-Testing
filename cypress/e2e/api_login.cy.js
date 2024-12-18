describe('API login', () => {
  it('Successful login with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('API_URL') + '/auth/v2/at/login',
      headers: {
        'accept': 'application/json',
        'Sae-Device-Type': 'browser',
        'Content-Type': 'application/json'
      },
      body: {
        'username': Cypress.env('USERNAME'),
        'password': Cypress.env('PASSWORD')
      }
    }).as('response');
    cy.get('@response').its('status').should('equal', 201);
    cy.get('@response').its('body').should('have.property', 'token');
  });
  it('Unsuccessful login with missing credentials', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('API_URL') + '/auth/v2/at/login',
      headers: {
        'accept': 'application/json',
        'Sae-Device-Type': 'browser',
        'Content-Type': 'application/json'
      },
      body: {
        'username': Cypress.env('USERNAME'),
        'password': ''
      }
    }).as('response');
    cy.get('@response').its('status').should('equal', 400);
    cy.get('@response').its('body').should('not.have.property', 'token');
  });
  it('Unsuccessful login with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: cypressConfig.env('API_URL') + '/auth/v2/at/login',
      headers: {
        'accept': 'application/json',
        'Sae-Device-Type': 'browser',
        'Content-Type': 'application/json'
      },
      body: {
        'username': cypressConfig.env('USERNAME'),
        'password': 'wrongpassword'
      }
    }).as('response');
    cy.get('@response').its('status').should('equal', 403);
    cy.get('@response').its('body').should('not.have.property', 'token');
  });
});
