<template>
  <div class="pdp">
    <div class="pdp__container">
      <PDPImages :images="product.images" :productName="product.name"/>

      <div class="pdp__details">
        <form v-on:submit.prevent>
          <a href="#" class="return-link">&lt; Back to <span>Women’s Clothing</span></a>
          <h1>{{product.name}}</h1>

          <a class="reviews">
            <div class="reviews__count">12 reviews</div>
            <span v-bind:style="`width: ${reviewPercentage}%`"></span>
          </a>

          <div class="pdp__description">
            {{product.description}}
          </div>

          <div class="pdp__options">
            <div>
              <select class="selectbox">
                <option>Select Size</option>

              </select>
            </div>
          </div>
          <div class="pdp__options">
            <QuantityBox 
              :maxQuantity="4" 
              :initialQuantity="product.quantity" 
            />
            <AddToCard :product="product" />
          </div>
        </form>
      </div>
    </div>
    <div class="recommendations">
      <div class="separator">
        <span>Related Products</span>
      </div>
      <ProductPOD v-for="(pod, index) in recommendations"
        :key="`recommendation${index}`" 
        :product="pod"
      >
      </ProductPOD>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/pdp.scss';
</style>

<script>
import BVService from '@/services/BVService.js';
import PDPImages from '@/components/PDPImages.vue';
import QuantityBox from '@/components/QuantityBox.vue';
import AddToCard from '@/components/AddToCard.vue';
import ProductPOD from '@/components/ProductPOD.vue';

export default {
  name: 'PDP',
  components: {
    PDPImages,
    QuantityBox,
    AddToCard,
    ProductPOD,
  },
  created () {
    this.product = {
      id: '',
      name: 'Sofi Blouse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nibh volutpat, gravida nunc sed, laoreet lorem. Duis rutrum felis lectus, et eleifend eros mattis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis placerat arcu. Etiam sed mauris ligula. Praesent scelerisque tempus magna, at dapibus lorem aliquet eget. Ut ut arcu ut libero tincidunt lobortis vel et nibh. Vivamus at faucibus eros. Suspendisse ullamcorper pretium arcu quis gravida. In auctor turpis sed fermentum vestibulum. Nunc elit nisl, fermentum vel ultrices ac, posuere sed augue. Sed luctus in lorem eget consequat. Aenean pharetra maximus odio eu facilisis. Nam at porttitor urna, at suscipit mauris.',
      quantity: 1,
      images: [
        {
          thumbnail: require('../assets/images/main.jpg'),
          main: require('../assets/images/main.jpg'),
        },
        {
          thumbnail: require('../assets/images/main.jpg'),
          main: require('../assets/images/main.jpg'),
        },
        {
          thumbnail: require('../assets/images/main.jpg'),
          main: require('../assets/images/main.jpg'),
        },
        {
          thumbnail: require('../assets/images/main.jpg'),
          main: require('../assets/images/main.jpg'),
        }
      ],
    };

    this.recommendations = this.getRecommendations();
    this.getProductRating();
  },
  data: () => {
    return {
      test: false,
      product: null,
      recommendations: null,
      reviewPercentage: 0,
      reviewData: null
    };
  },
  methods: {
    /**
     * Gets the review data
     */
    getProductRating() {
      BVService.getReviews().then(result => {
        let reviewStats = result.data.Results[0].ReviewStatistics;
        this.reviewPercentage = Math.floor((reviewStats.AverageOverallRating / reviewStats.OverallRatingRange) * 100);

      })
    },

    /**
     * Generates random recommendations
     */
    getRecommendations() {
      return new Array(4).fill({
        id: Math.floor(Math.random(200) * 10000),
        name: 'asd',
        image: require('@/assets/images/main.jpg'),
        price: '$25.20',
      });
      console.log(process.env.VUE_APP_BV_URL);

    },
  },

};
</script>
