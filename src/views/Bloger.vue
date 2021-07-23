<template>
  <div>
    <Dir dir_one="الصفحة الرئيسية" dir_two="مدونة وصلة" dir_three="" />
    <AllBloger />
  </div>
</template>

<script>
import AllBloger from "@/components/Local/AllBlogers/AllBlogers.vue";
import Dir from "@/components/Global/Dir/Dir.vue";

export default {
  name: "Bloger",
  components: {
    AllBloger,
    Dir,
  },
};
</script>
