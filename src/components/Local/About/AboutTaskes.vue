<template>
  <div class="col-10 col-md-6 col-lg-3 mx-auto my-3">
   <div class="p-2">
      <div class="border bg-white  border-radius p-2">
      <img :src="name.img" />
      <h6 class="my-3">{{ name.title }}</h6>
      <ul>
        <li class="SecGrayColor MainFont my-2">{{ name.txt_one }}</li>
        <li class="SecGrayColor MainFont">{{ name.txt_two }}</li>
      </ul>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "AboutTaskes",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.border-radius {
  border-radius: 20px;
  min-height: 300px;
}
</style>
