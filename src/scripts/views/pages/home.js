import RestaurantDbSource from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 id="explore-restaurant" class="content__heading">Explore Restaurant</h2>
        <div tabindex="1" id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.Home();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
