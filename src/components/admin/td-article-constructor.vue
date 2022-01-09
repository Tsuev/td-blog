<template>
  <div class="row w-100 p-2">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title mb-0">Конструктор постов</h2>
        </div>
        <div class="card-body">
          <div class="mb-3 col-md-2">
            <label class="form-label" for="inputCity">Заголовок</label>
            <input
              maxlength="150"
              type="text"
              class="form-control"
              id="inputCity"
            />
          </div>
          <div class="mb-3 col-md-4">
            <label class="form-label" for="inputCity">Анонс</label>
            <input
              maxlength="200"
              type="text"
              class="form-control"
              id="inputCity"
            />
          </div>
          <div class="mb-2">Текст</div>
          <quill-editor ref="myQuillEditor" v-model="content" />
          <button class="btn btn-info px-5 mt-4">Опубликовать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "td-article-constructor",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    console.log(this.$refs.myQuillEditor.quill);
  },
  watch: {
    content(val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>