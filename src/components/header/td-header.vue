<template>
  <div class="td-header">
    <nav class="navbar navbar-expand navbar-light navbar-bg">

      <td-burger-ico />

      <td-search />

      <td-menu />

			<td-profile v-if="false"/>

    </nav>
  </div>
</template>

<script>
import tdMenu from "./td-menu.vue";
import tdSearch from "./td-search.vue";
import tdBurgerIco from "./td-burger-ico.vue";
import TdProfile from './td-profile.vue';
export default {
  components: { tdMenu, tdSearch, tdBurgerIco, TdProfile },
  name: "td-header",
};
</script>

<style>
</style>