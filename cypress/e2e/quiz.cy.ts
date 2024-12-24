describe('Tech Quiz E2E Test', () => {
  it('should load the quiz page and start the quiz', () => {
    cy.visit('/'); // Adjust the path if needed
    cy.contains('Start Quiz').click();
    cy.get('.question').should('exist');
  });
});
