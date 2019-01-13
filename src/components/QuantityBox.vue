<template>
  <div class="quantityBox">
    <button type="button" 
      class="quantityBox__button" 
      @click="changeQuantity('decrease')">
      -
    </button>
    <input type="number" name="quantity" :value="quantity">
    <button type="button" 
      class="quantityBox__button" 
      @click="changeQuantity()">
      +
    </button>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/quantitybox.scss';
</style>

<script>
export default {
  name: 'QuantityBox',
  props: {
    maxQuantity: Number,
    initialQuantity: Number
  },
  data: function () {
    return {
      quantity: this.initialQuantity
    }
  },
  methods: {
    changeQuantity: function (direction) {
      let toAdd = 1;

      if (direction === 'decrease') {
        toAdd = -1;
      }

      let newQuantity = this.quantity + toAdd;

      if (newQuantity < 1 || newQuantity > this.maxQuantity) {
        return;
      }

      this.quantity += toAdd;
    }
  }
}
</script>

