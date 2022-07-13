describe('Meal search', () => {
  it('can be shown on the website for potato', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('potato');
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Foil-wrapped baby potatoes');
  });


  it('can be shown on the website for onion', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('onion');
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Charred spring onions');
  });

  it('can be shown on the website for bacon', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('bacon');
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Bacon Wrapped Dates');
  });
})