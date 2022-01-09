<template>
  <div class="td-sidebar">
    <nav id="sidebar" class="sidebar">

      <div class="sidebar-content js-simplebar" data-simplebar="init">

        <div class="simplebar-wrapper" style="margin: 0px">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px">
              <div
                class="simplebar-content-wrapper"
                style="height: 100%; overflow: hidden scroll"
              >
                <div class="simplebar-content" style="padding: 0px">

                  <td-blog-logo />

                  <td-menu />

                </div>
              </div>
            </div>
          </div>
          <div
            class="simplebar-placeholder"
            style="width: auto; height: 1419px"
          ></div>
        </div>

        <div
          class="simplebar-track simplebar-horizontal"
          style="visibility: hidden"
        >
          <div
            class="simplebar-scrollbar"
            style="width: 0px; display: none"
          ></div>
        </div>

        <div
          class="simplebar-track simplebar-vertical"
          style="visibility: visible"
        >
          <div
            class="simplebar-scrollbar"
            style="
              height: 251px;
              transform: translate3d(0px, 336px, 0px);
              display: block;
            "
          ></div>
        </div>

      </div>

    </nav>
  </div>
</template>

<script>
import tdBlogLogo from './td-blog-logo.vue'
import tdMenu from './td-menu.vue'
export default {
  name: "td-sidebar",
  components: {
    tdBlogLogo,
    tdMenu
  }

};
</script>

<style>
</style>