const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('#not-found');
  I.see('No Liked Restaurant', '#not-found');

  I.amOnPage('/');
  await I.waitForElement('.restaurant-item__content a', 3);
  I.seeElement('.restaurant-item__content a');
  const firstResto = locate('.restaurant-item__content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.waitForElement('#likeButton', 2);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__content a');

  I.seeElement('.restaurant-item__content a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('No Liked Restaurant', '#not-found');
});
