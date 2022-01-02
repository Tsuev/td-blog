<template>
  <div class="td-card col-12 p-1">

    <div v-for="article in articles" :key="article.id" class="card my-3">
      <div class="card-header pb-0">
        <h5 class="card-title mb-0">{{ article.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ article.text }}
        </p>
        <router-link :to="article.route" tag="a" class="btn btn-info">Прочитать</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "td-card",
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