<template>
  <div class="pdp">
    <div class="pdp__container">
      <PDPImages :images="product.images" :productName="product.name"/>

      <div class="pdp__details">
        <form v-on:submit.prevent>
          <router-link to="/" class="return-link">
              &lt; Back to <span>Women’s Clothing</span>
          </router-link>

          <h1>{{product.name}}</h1>

          <a class="reviews" v-if="this.reviewData">
            <div class="reviews__count">{{reviewData.TotalReviewCount}} reviews</div>
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
    <div class="separator">
      <span>Related Products</span>
    </div>
    <div class="recommendations">

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
    console.log(this.$route.params.id)
    this.product = {
      id: this.$route.params.id,
      name: 'Sofi Blouse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nibh volutpat, gravida nunc sed, laoreet lorem. Duis rutrum felis lectus, et eleifend eros mattis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis placerat arcu. Etiam sed mauris ligula. Praesent scelerisque tempus magna, at dapibus lorem aliquet eget. Ut ut arcu ut libero tincidunt lobortis vel et nibh. Vivamus at faucibus eros. Suspendisse ullamcorper pretium arcu quis gravida. In auctor turpis sed fermentum vestibulum. Nunc elit nisl, fermentum vel ultrices ac, posuere sed augue. Sed luctus in lorem eget consequat. Aenean pharetra maximus odio eu facilisis. Nam at porttitor urna, at suscipit mauris.',
      quantity: 1,
      images: [
        {
          thumbnail: require('../assets/images/main.jpg'),
          main: require('../assets/images/main.jpg'),
        },
        {
          thumbnail: require('../assets/images/main2.jpg'),
          main: require('../assets/images/main2.jpg'),
        },
        {
          thumbnail: require('../assets/images/main3.jpg'),
          main: require('../assets/images/main3.jpg'),
        },
        {
          thumbnail: require('../assets/images/main4.jpg'),
          main: require('../assets/images/main4.jpg'),
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
        this.reviewData = reviewStats;
      })
    },

    /**
     * Generates random recommendations
     */
    getRecommendations() {
      const images = [
        require(`@/assets/images/main.jpg`),
        require(`@/assets/images/main1.jpg`),
        require(`@/assets/images/main2.jpg`),
        require(`@/assets/images/main3.jpg`)
      ]

      return new Array(4).fill(true).map((item, index) => {
        return {
          id: `P${Math.floor(Math.random(200) * 10000)}`,
          name: `Product Name ${index + 1}`,
          image: images[index],
          price: '$25.20',
        }
      });
    },
  },

};
</script>
