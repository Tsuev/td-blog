<template>
  <ul class="navbar-nav">
    <li class="nav-item px-2 dropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
        Menu
      </a>
      <div
        class="dropdown-menu dropdown-menu-start dropdown-mega"
      >
        <div class="d-md-flex align-items-start justify-content-start">
          <div class="dropdown-mega-list">
            <div class="dropdown-header">Тест</div>
            <router-link :to="'/articles'" class="dropdown-item">Тестовый роут</router-link>
          </div>
          <div class="dropdown-mega-list">
            <div class="dropdown-header">HTML</div>
            <a
              v-for="menu in menu.html"
              :key="menu.id"
              class="dropdown-item"
              href="#"
              >{{ menu.name }}</a
            >
          </div>
          <div class="dropdown-mega-list">
            <div class="dropdown-header">CSS</div>
            <a
              v-for="menu in menu.css"
              :key="menu.id"
              class="dropdown-item"
              href="#"
              >{{ menu.name }}</a
            >
          </div>
          <div class="dropdown-mega-list">
            <div class="dropdown-header">JavaScript</div>
            <a
              v-for="menu in menu.js"
              :key="menu.id"
              class="dropdown-item"
              href="#"
              >{{ menu.name }}</a
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "td-menu",
  data() {
    return {
      menu: {
        html: [
          { id: 0, name: "Что такое HTML?" },
          { id: 1, name: "Основы HTML" },
        ],
        css: [
          { id: 0, name: "Что такое CSS?" },
          { id: 1, name: "Основы CSS" },
        ],
        js: [
          { id: 0, name: "Что такое JavaScript?" },
          { id: 1, name: "Основы JavaScript" },
        ],
      },
    };
  },
};
</script>

