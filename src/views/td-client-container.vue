<template>
  <div class="wrapper">
    <td-sidebar />

    <div class="main">
      <td-header />

      <main class="content p-0">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import tdSidebar from "@/components/sidebar/td-sidebar.vue";
import TdHeader from "@/components/header/td-header.vue";
import tdCard from "@/components/card/td-blog-card.vue";

export default {
  components: {
    tdSidebar,
    TdHeader,
    tdCard,
  },
};
</script>
<style lang="scss">
.main-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>