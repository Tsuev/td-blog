<template>
  <ul class="sidebar-nav">
    <li class="sidebar-header">Навигация</li>
    <li class="sidebar-item">
      <router-link :to="'/articles'" tag="a" class="sidebar-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass align-middle me-2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
        <span class="align-middle">Тестовый роут</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "td-menu",
};
</script>

<style>
</style>