<template>
 <div class="total-value">
  Balance: <span v-bind:style="{ color: color }">{{ total }}</span>
 </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    color() {
      if (this.total > 0) { return 'green'}
      else if (this.total === 0) { return 'black' }
      else { return 'red' }
    }
  }
};
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>