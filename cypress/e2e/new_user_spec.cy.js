describe('New user', () => {
  it('can sign up to the website', () => {
    cy.visit('localhost:3000')
    cy.get('[data-cy="signup-username"]').type('Juan');
    cy.get('[data-cy="signup-email"]').type('juan@juan.com');
    cy.get('[data-cy="signup-password"]').type('yes');
    cy.get('[data-cy="signup-button"]').click();
    cy.get('[data-cy="nav-username"]').should('contain', 'Hi, Juan!');
  });
})
