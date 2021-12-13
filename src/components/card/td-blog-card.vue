<template>
  <div class="td-card">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">{{ title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ description }}
        </p>
        <a href="/" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "td-card",
  props: {
    title: {
      type: String,
      default: "Заголовок",
    },
    description: {
      type: String,
      default:
        "Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
    },
    route: {
      type: String,
      default: "/card",
    },
  },
};
</script>

<style>
</style>