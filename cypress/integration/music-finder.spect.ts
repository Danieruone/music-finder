/* global cy */

describe("Music Finder App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("front page can be opened", () => {
    cy.contains("Music Finder");
  });
  it("Search bar and navigation is working", () => {
    cy.get("input:first").type("Korn");
    cy.contains("Buscar").click();
    cy.wait(4000);
    cy.get('[data-test-id="songcard"]');
    cy.get('[data-test-id="right-arrow"]').click();
    cy.wait(2000);
    cy.get('[data-test-id="left-arrow"]').click();
    cy.wait(2000);
    cy.get('[data-test-id="songcard"]').first().click();
    cy.wait(2000);
    cy.get('[data-test-id="close-modal"]').click();
    cy.wait(2000);
    cy.visit("http://localhost:3000");
  });
});
