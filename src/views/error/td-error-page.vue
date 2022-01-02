<template>
      <div class="row w-100 h-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="d-table-cell align-middle">
            <div class="text-center">
              <h1 class="display-1 fw-bold">404</h1>
              <p class="h1">Страница не найдена</p>
              <p class="h2 fw-normal mt-3 mb-4">
                Страница, которую вы ищете, могла быть удалена.
              </p>
              <router-link :to="'/'" class="btn btn-primary btn-lg">Вернуться на главную</router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {};
</script>

<style>
</style>