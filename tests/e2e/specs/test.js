const ARTIST = 'eminem';

describe('Music Search App Test Suite', () => {
  // before each test, make sure to visit the home page of the app
  beforeEach(() => {
    cy.visit('/'); // "baseUrl" is defined in cypress.json file
  });

  context('Checking App Exists', () => {
    it('Visits the app root url', () => {
      cy.visit('/');
      cy.contains('h2', 'Search Song or Artist');
    });
  });

  context('Search Artist', () => {
    it('should allow me to search one artist', () => {
      // inputs a name and searches artist
      cy.get('[data-cy= "search"]').type(ARTIST);
      cy.get('[data-cy=submit]').click();

      // adds song to playlist
      cy.get('tr>td')
        .eq(0)
        .click();

      // Plays the song in playlist
      cy.get('[data-cy="playlist"]')
        .find('tr>td')
        .eq(3)
        .click();

      // Plays the song in playlist
      cy.get('[data-cy="playlist"]')
        .find('tr>td')
        .eq(4)
        .click();

      // Removes playist item
      cy.get('[data-cy="playlist"]')
        .find('tr>td')
        .eq(0)
        .click();

      // click on artist
      cy.get('tr>td')
        .eq(1)
        .click();
    });
  });
});
