const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#not-found');
  I.see('No Liked Restaurant', '#not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Liked Restaurant', '#not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');
  const firstMovie = locate('.restaurant-item__content a').first();
  const firstMovieTitle = await I.grabTextFrom(firstMovie);
  I.click(firstMovie);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__content');
  const likedMovieTitle = await I.grabTextFrom('.restaurant-item__content a');

  assert.strictEqual(firstMovieTitle, likedMovieTitle);
});
