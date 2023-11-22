import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" id=""explore-restaurant>Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      const noRestaurants = document.createElement('h2');
      noRestaurants.innerHTML = '<h2>No Liked Restaurant</h2>';
      noRestaurants.setAttribute('id', 'not-found');
      restaurantsContainer.appendChild(noRestaurants);
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
