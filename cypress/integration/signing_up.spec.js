// Advised by technical coach not to pursue end to end tests for this app.

describe('signing up', () => {
  specify('user sees welcome message', () => {
    // cy.visit('http://localhost:3000');
    // cy.signUp({
    //   handle: 'Batman',
    //   password: 'Robin',
    // });
    // cy.get('#welcome-message').should.have.text('Welcome, Batman!');
  });
});


// make sure that you're no inadvertantly testing func of API itself
// can think about environment variables for the api address (you'll be doing this for the token anyway)
