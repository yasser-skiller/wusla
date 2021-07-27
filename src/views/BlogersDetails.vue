<template>
  <Dir
    dir_one="الصفحة الرئيسية"
    dir_two=" مدونة وصلة"
    dir_three="  هذا النص يمكن استبداله بنص اخر بديل"
  />
  <BlogersDetailsParent />
  <Title title="مدونات أخرى" />
  <AllBloger />
</template>
<script>
import AllBloger from "@/components/Local/AllBlogers/AllBlogers.vue";

import Title from "@/components/Global/Title/Title.vue";
import BlogersDetailsParent from "@/components/Local/BlogersDetails/BlogersDetailsParent.vue";
import Dir from "@/components/Global/Dir/Dir.vue";
export default {
  name: "BlogersDetails",
  components: {
    BlogersDetailsParent,
    Dir,
    Title,
    AllBloger,
  },
};
</script>
