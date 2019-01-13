<template>
  <button class="add-to-cart" 
    @click="addToCard(product)">
    Add to Cart &plus;
  </button>
</template>

<script>
export default {
  name: 'AddToCard',
  props: {
    product: Object
  },
  methods: {
    addToCard: function (product) {
      this.$root.$emit('update-cart', product);

      return; //prevent native events
    }
  }
}
</script>

