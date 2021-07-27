<template>
  <Dir
    dir_one="الصفحة الرئيسية"
    dir_two=" الخدمات الاستشارية"
    dir_three="  تصميم الاستراتيجية الاتصالية"
  />
  <ServiceDetailsParent />
</template>
<script>
import ServiceDetailsParent from "@/components/Local/ServiceDetails/ServiceDetailsParent.vue";
import Dir from "@/components/Global/Dir/Dir.vue";
export default {
  name: "ServicesDetails",
  components: {
    ServiceDetailsParent,
    Dir,
  },
};
</script>
