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
                  <a class="sidebar-brand" href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture align-middle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    <span class="align-middle me-3">Blog</span>
                  </a>

                  <ul class="sidebar-nav">
                    <li class="sidebar-header">Pages</li>
                    <li class="sidebar-item">
                      <a
                        data-bs-target="#multi"
                        data-bs-toggle="collapse"
                        class="sidebar-link collapsed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-share-2 align-middle"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                        <span class="align-middle">Multi Level</span>
                      </a>
                      <ul
                        id="multi"
                        class="sidebar-dropdown list-unstyled collapse"
                        data-bs-parent="#sidebar"
                      >
                        <li class="sidebar-item">
                          <a
                            data-bs-target="#multi-2"
                            data-bs-toggle="collapse"
                            class="sidebar-link collapsed"
                          >
                            Two Levels
                          </a>
                          <ul
                            id="multi-2"
                            class="sidebar-dropdown list-unstyled collapse"
                          >
                            <li class="sidebar-item">
                              <a class="sidebar-link" data-bs-target="#"
                                >Item 1</a
                              >
                              <a class="sidebar-link" data-bs-target="#"
                                >Item 2</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="sidebar-item">
                          <a
                            data-bs-target="#multi-3"
                            data-bs-toggle="collapse"
                            class="sidebar-link collapsed"
                          >
                            Three Levels
                          </a>
                          <ul
                            id="multi-3"
                            class="sidebar-dropdown list-unstyled collapse"
                          >
                            <li class="sidebar-item">
                              <a
                                data-bs-target="#multi-3-1"
                                data-bs-toggle="collapse"
                                class="sidebar-link collapsed"
                              >
                                Item 1
                              </a>
                              <ul
                                id="multi-3-1"
                                class="sidebar-dropdown list-unstyled collapse"
                              >
                                <li class="sidebar-item">
                                  <a class="sidebar-link" data-bs-target="#"
                                    >Item 1</a
                                  >
                                  <a class="sidebar-link" data-bs-target="#"
                                    >Item 2</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li class="sidebar-item">
                              <a class="sidebar-link" data-bs-target="#"
                                >Item 2</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

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
export default {
  name: "td-sidebar",
};
</script>

<style>
</style>