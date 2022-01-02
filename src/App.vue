<template>
  <div id="app">
    <td-client-container />
  </div>
</template>

<script>
import TdClientContainer from "./views/td-client-container.vue";
import TdLogin from "./views/pages/td-login.vue";

export default {
  components: {
    TdClientContainer,
    TdLogin,
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif !important;
}
</style>
