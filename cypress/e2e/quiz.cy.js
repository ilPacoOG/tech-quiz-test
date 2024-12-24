describe('Tech Quiz E2E Test', () => {
  it('should load the quiz page and start the quiz', () => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: { question: "What is JavaScript?", options: ["Language", "Framework"] },
    }).as('getQuestion');

    cy.visit('/'); // Load the app
    cy.contains('Start Quiz').click(); // Click the Start Quiz button
    cy.wait('@getQuestion'); // Wait for the API response
    cy.get('.question', { timeout: 10000 }).should('exist'); // Verify the question is displayed
  });
});
