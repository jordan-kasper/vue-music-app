const ARTIST = 'eminem';

const LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

describe('Music Search App Test Suite', () => {
  // before each test, make sure to visit the home page of the app
  beforeEach(() => {
    cy.visit('/'); // "baseUrl" is defined in cypress.json file
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
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
    });
  });

  context('Testing Playlist', () => {
    it('should allow me play and stop a song and delete a song', () => {
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

      // Stops the song in playlist
      cy.get('[data-cy="playlist"]')
        .find('tr>td')
        .eq(4)
        .click();

      // Removes playist item
      cy.get('[data-cy="playlist"]')
        .find('tr>td')
        .eq(0)
        .click();
    });
  });
  context('Accessing Artist Page', () => {
    it('Allows you to view artist and their songs', () => {
      // inputs a name and searches artist
      cy.get('[data-cy= "search"]').type(ARTIST);
      cy.get('[data-cy=submit]').click();

      // click on artist
      cy.get('tr>td')
        .eq(1)
        .click();
      // returns back to song page
      cy.get('[data-cy=return]').click();
    });
  });
});
