<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4">
    <div class="shadow-sm border text-center px-2">
      <small class="SecGrayColor">{{name.unit_title}}</small>
      <p class="mainColor">{{name.unit_content}}</p>
            <p class="mainColor">{{name.unit_number}}</p>
      <!-- <ul class="SecGrayColor text-right">
        <li v-for="item in name.Ele" :key="item.id">{{ item }}</li>
      </ul> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  min-height: 140px;
}
</style>
<script>
export default {
  name: "ProgrammeDetailsChild",
  props: ["name"],
};
</script>
