<template>
  <button class="add-to-cart" 
    @click="addToCard(product)">
    Add to Cart <strong>&#43;</strong>
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

