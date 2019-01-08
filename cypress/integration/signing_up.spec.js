describe('signing up', () => {
  specify('user sees welcome message', () => {
    cy.visit('http://localhost:3000');
    // cy.get('#login').click();
    cy.signUp({
      handle: 'Batman',
      password: 'Robin',
    });
    // cy.get('#welcome-message').should.have.text('Welcome, Batman!');
  });
});
