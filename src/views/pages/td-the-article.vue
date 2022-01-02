<template>
  <td-article-card :articles="articles"/>
</template>

<script>
import tdArticleCard from "../../components/card/td-article-card.vue";
export default {
  components: { tdArticleCard },
  data() {
    return {
      articles: [
        {
          id: 0,
          title: "Первая статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: "/articles/1",
        },
        {
          id: 1,
          title: "Вторая статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: "/articles/2",
        },
        {
          id: 2,
          title: "Третья статья",
          text: "Это тестовый текст статьи в котором мы ничего не разбираем...",
          route: "/articles/3",
        },
      ],
    };
  },
};
</script>

<style>
</style>