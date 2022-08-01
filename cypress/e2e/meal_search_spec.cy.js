describe('Meal search', () => {
  it('can be shown on the website for potato', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('potato');
    cy.get('[data-cy="ingredient-button"]').click();
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Foil-wrapped baby potatoes');
    cy.get('[data-cy="meal-card-info"]').first().click();
    cy.get('[data-cy="used-ingredient"]').should('contain', 'new potatoes');
    cy.get('[data-cy="recipe-measurements"]').should('contain', '750g miniature new potatoes');
    cy.get('[data-cy="recipe-instructions"]').should('contain', 'Put the potatoes in a large saucepan of cold water')
  });


  it('can be shown on the website for onion', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('onion');
    cy.get('[data-cy="ingredient-button"]').click();
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Charred spring onions');
    cy.get('[data-cy="meal-card-info"]').first().click();
    cy.get('[data-cy="used-ingredient"]').should('contain', 'spring onions');
    cy.get('[data-cy="recipe-measurements"]').should('contain', '2 bunches of spring onions');
    cy.get('[data-cy="recipe-instructions"]').should('contain', 'Wash the spring onions and pat dry')
  });

  it('can be shown on the website for bacon', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="recipe-search"]').type('bacon');
    cy.get('[data-cy="ingredient-button"]').click();
    cy.get('[data-cy="recipe-search-button"]').click();
    cy.get('[data-cy="meal--title"]').should('contain', 'Bacon Wrapped Dates');
    cy.get('[data-cy="meal-card-info"]').first().click();
    cy.get('[data-cy="used-ingredient"]').should('contain', 'bacon');
    cy.get('[data-cy="recipe-measurements"]').should('contain', 'leftover bacon');
    cy.get('[data-cy="recipe-instructions"]').should('contain', 'Sorry this recipe does not have any available instructions.')
  });
})