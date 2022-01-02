<template>
  <div class="td-articles-list container">
    <td-blog-card :articles="articles"/>
  </div>
</template>

<script>
import tdBlogCard from "../../components/card/td-blog-card.vue";
export default {
  components: { tdBlogCard },
  name: "td-articles-list",
  data() {
    return {
      articles: [
        {
          id: 0,
          title: "Первая статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: '/articles/1'
        },
        {
          id: 1,
          title: "Вторая статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: '/articles/2'
        },
        {
          id: 2,
          title: "Третья статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: '/articles/3'
        },
      ],
    };
  },
};
</script>

<style>
</style>