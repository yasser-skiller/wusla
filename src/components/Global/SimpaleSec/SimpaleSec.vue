<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4">
    <div class="shadow-sm card heigth">
      <img :src="name.img" class="card-img-top mx-auto" alt="img" />
      <div class="card-body">
        <h5 class="card-title">
          {{ name.title }}
        </h5>
        <p class="card-text SecGrayColor">{{ name.txt }}</p>
        <router-link :to="path" tag="li"  class="mainColor cursorPointer">
          <a>أقرا المزيد</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SimpaleSec",
  props: ["name", "path"],
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
