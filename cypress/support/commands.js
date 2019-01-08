Cypress.Commands.add('signUp', ({ handle, password }) => {
  cy.get('#sign-up-button').click();
  cy.get('#handle').type(handle);
  cy.get('#password').type(password);
  cy.get('Sign Up').click();
});
