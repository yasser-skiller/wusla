<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4">
    <div class="shadow-sm card heigth">
      <img :src="name.thumbnail" class="card-img-top mx-auto" alt="img" />
      <div class="card-body">
        <h5 class="card-title fw-bold">
          {{ name.title }}
        </h5>
        <p class="card-text SecGrayColor">{{ name.description }}</p>
        <router-link :to="path + '/' + name.slug" class="mainColor cursorPointer">
          <a>أقرا المزيد</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SimpaleSec",
  props: ["name", "path", "num"],
};
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 200px;
}
.heigth {
  min-height: 400px;
}
</style>
