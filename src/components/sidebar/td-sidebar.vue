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
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      enable-background="new 0 0 20 20"
                      xml:space="preserve"
                    >
                      <path
                        d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
                      ></path>
                      <path
                        d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
                      ></path>
                      <path
                        d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
                      ></path>
                    </svg>

                    <span class="align-middle me-3">AppStack</span>
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