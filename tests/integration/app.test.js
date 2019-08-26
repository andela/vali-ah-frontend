describe("Google test", () => {
  it("visits google and search", () => {
    cy.visit("https://google.com");
    cy.get('[name="q"]').type('Search {enter}')
    cy.get('[name="q"]').should('have.value', 'Search');
  });
});
