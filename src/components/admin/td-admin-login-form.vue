<template>
  <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
    <div class="row h-100 d-flex align-items-center">
      <form>
      <h2 class="text-center">Войти в админ панель</h2>

        <div class="mb-3">
          <label class="form-label">Логин</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="email"
            placeholder="Введите логин"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Пароль</label>
          <input
            class="form-control form-control-lg"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <div class="text-center mt-3">
          <router-link
            :to='"/admin"'
            class="btn btn-lg btn-primary d-block"
            >Войти</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>