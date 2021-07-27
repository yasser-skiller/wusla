<template>
  <Dir dir_one="الصفحة الرئيسية" dir_two="البرامج التأهيلية" dir_three="" />
  <AllProgrames />
</template>

<script>
import AllProgrames from "@/components/Local/AllProgrames/AllProgrammes.vue";
import Dir from "@/components/Global/Dir/Dir.vue";

export default {
  name: "Programmes",
  components: {
    Dir,
    AllProgrames,
  },
};
</script>
