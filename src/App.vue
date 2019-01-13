<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/pdp/P123">
        Product
      </router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/main.scss';
  @import '@/assets/scss/pod.scss';

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  import axios from 'axios';

  window.Cart = {
    items: []
  }
  export default {
    created() {
      this.$root.$on('update-cart', function (item) {
        const quantity = item.quantity || 1;
        
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          product: item.id,
          quantity
        })
        .then(function (response) {
          Cart.items[item.id] = quantity;
          console.log(`"${item.name}" Added to Cart`, Cart)
        })
        .catch(function (error) {
          alert('Error adding product to cart');
        });
        
      })
    },
  }
</script>



