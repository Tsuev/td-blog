<template>
  <div class="td-home container-fluid p-0 h-100 d-flex align-items-center position-relative overflow-hidden">
    <div class="row w-100">
      <div class="col-12 d-flex justify-content-center">
        <h1 class="name position-relative">
          <span class="hover-animate">T</span>
          <span class="hover-animate">M</span>
          <span class="hover-animate">-</span>
          <span class="hover-animate">F</span>
          <span class="hover-animate">r</span>
          <span class="hover-animate">o</span>
          <span class="hover-animate">n</span>
          <span class="hover-animate">t</span>
          <span class="hover-animate">e</span>
          <span class="hover-animate">n</span>
          <span class="hover-animate">d</span>
        </h1>
      </div>
    </div>
    <img class="position-absolute" src="@/assets/img/banner.png" alt="" />
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
.hover-animate {
  transition-duration: 0.4s;
  display: inline-block;
  &:hover {
    transform: translateY(-50px);
    text-shadow: 0px 45px 2px rgba(150, 150, 150, 0.5);
    transition-duration: 0.4s;
  }
  // animation: start-animate 3s ease-in-out 0.1s 1 normal none;
}

@media screen and (max-width: 400px) {
  .name {
    font-size: 50px;
  }
}
@keyframes start-animate {
  from {
    color: hsl(0, 0%, 0%);
    font-size: 40px;
  }
  to {
    margin: 0px;
    font-size: 150px;
  }
}
</style>