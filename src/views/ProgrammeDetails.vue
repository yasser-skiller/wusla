<template>
  <Dir
    dir_one="الصفحة الرئيسية"
    dir_two="البرامج التأهيلية"
    dir_three="أخصائي الاتصال التنموي"
  />
  <ProgrammeDetailsParent />
</template>
<script>
import ProgrammeDetailsParent from "@/components/Local/ProgrammeDetails/ProgrammeDetailsParent.vue";
import Dir from "@/components/Global/Dir/Dir.vue";
export default {
  name: "ProgrammeDetails",
  components: {
    ProgrammeDetailsParent,
    Dir,
  },
};
</script>
