<template>
  <div id="app">
    <div class="wrapper">
      <td-sidebar />

      <div class="main">
        <td-header />

        <main class="content p-0">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import tdSidebar from "@/components/sidebar/td-sidebar.vue";
import TdHeader from "./components/header/td-header.vue";
export default {
  components: {
    tdSidebar,
    TdHeader,
  },
};
</script>
<style lang="scss">
</style>
