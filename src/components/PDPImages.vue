<template>
  <div class="pdp__images">
      <div class="pdp__images__main">
          <img :src="mainImage" :alt="productName"/>
      </div>
      <div class="pdp__images__thumbnails">
          <a href="#;" 
            :data-target="image.main" 
            class="pdp__images__thumb" 
            v-bind:key="index" v-for="(image, index) in images"
            @click="switchImage(index)">
              <img :src="image.thumbnail" :alt="productName + ' Thumbnail ' + index" :data-target="image.main"/>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PDPImages',
  props: {
    images: Array,
    productName: String
  },
  data: function () {
    return {
      mainImage: this.images[0].main
    }
  },
  methods: {
    switchImage: function (index) {
      this.mainImage = this.images[index].main;
    }
  }

}
</script>
