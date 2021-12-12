<template>
  <div class="td-home container-fluid p-0 h-100 d-flex align-items-center position-relative overflow-hidden">
    <div class="row w-100">
      <div class="col-12 d-flex justify-content-center">
        <h1 class="name position-relative">TD-Frontend</h1>
      </div>
    </div>
    <img class="position-absolute" src="@/assets/img/banner.png" alt="">
  </div>
</template>

<script>
export default {
  name: "td-home",
  components: {},
};
</script>

<style lang="scss">
.name {
  font-size: 150px;
  z-index: 10;
}
</style>