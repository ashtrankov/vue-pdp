<template>
  <div class="pod">
    <router-link :to="{ name: 'pdp', params: { id: product.id }}">
      <img :src="product.image">
    </router-link>
    <h2>
      <router-link :to="{ name: 'pdp', params: { id: product.id }}"
        class="pod__name"
      >
        {{ product.name }}
      </router-link>
    </h2>
    <div class="pod__price">
      {{ product.price }}
    </div>
    <AddToCard />
  </div>
</template>

<script>
  import AddToCard from '@/components/AddToCard.vue';
  export default {
    name: 'ProductPOD',
    props: {
      product: Object,
    },
    components: {
      AddToCard,
    },
  }
</script>

