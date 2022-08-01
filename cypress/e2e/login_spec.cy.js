describe('Existing user', () => {
  it('can log in to the website', () => {
    cy.visit('localhost:3001');
    cy.get('[data-cy="login-dropdown"]').click();
    cy.get('[data-cy="login-email"]').type('juan@juan.com');
    cy.get('[data-cy="login-password"]').type('yes');
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="nav-username"]').should('contain', 'Hi, Juan');
  });
})