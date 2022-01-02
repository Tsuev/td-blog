<template>
  <div class="card m-3">
    <div class="card-header">
      <h5 class="card-title mb-0">{{ articles[$route.params.id - 1].title }}</h5>
    </div>
    <div class="card-body">
      {{ articles[$route.params.id - 1].text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style>
</style>