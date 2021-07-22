<template>
  <div class="bg-gray mb-5 raduis">
    <div
      class="d-flex flex-wrap m-0 mainColor py-5 px-2 justify-content-center"
    >
      <h5 class="font-weight-bold">{{ dir_one }}</h5>
      <span class="mx-2">></span>
      <h5 class="font-weight-bold">{{ dir_two }}</h5>
      <span class="mx-2 secondSign">{{
        dir_three.length > 0 ? ">" : null
      }}</span>
      <h5 class="">{{ dir_three }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dir",
  props: ["dir_one", "dir_two", "dir_three"],
};
</script>
<style lang="scss" scoped>
.raduis {
  border-radius: 0 0 90px 90px;
}
</style>
