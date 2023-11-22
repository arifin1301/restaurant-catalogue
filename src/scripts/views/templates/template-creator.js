/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
import CONFIG from '../../globals/config';

const FoodsMenuIteration = (restaurant) => {
  let data = '';
  for (const item of restaurant.menus.foods) {
    data += `<p tabindex="1" >- ${item.name}</p>`;
  }
  return data;
};

const DrinksMenuIteration = (restaurant) => {
  let data = '';
  for (const item of restaurant.menus.drinks) {
    data += `<p tabindex="1">- ${item.name}</p>`;
  }
  return data;
};

const createReviewsTemplate = (restaurant) => `
  <div class="card-review">
    <div class="profil">
      <h4 tabindex="1" >${restaurant.name}</h4>
      <p tabindex="1" >${restaurant.date}</p>
    </div>
    <div class="review-content">
      <p tabindex="1" >${restaurant.review}
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="1" id="explore-restaurant" class="restaurant__title">${restaurant.name}</h2>
  <img class="lazyload restaurant__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3 tabindex="1" >Information</h3>
    <h4 tabindex="1" >Alamat</h4>
    <p tabindex="1" >${restaurant.address}</p>
    <h4 tabindex="1" >Kota</h4>
    <p tabindex="1" >${restaurant.city}</p>
    <h4>Menu Makanan</h4 tabindex="1" >
    ${FoodsMenuIteration(restaurant)}
    <h4 tabindex="1" >Menu Minuman</h4>
    ${DrinksMenuIteration(restaurant)}
  </div>
  <div class="restaurant__overview">
    <h3 tabindex="1" >Description</h3>
    <p tabindex="1" >${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="1">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name || '-'}"
          crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p tabindex="1">⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 tabindex="0"><a href="/#/detail/${restaurant.id}" tabindex="1">${restaurant.name || '-'}</a></h3>
      <p tabindex="1">${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewsTemplate,
};
