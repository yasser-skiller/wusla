<template>
    <Dir dir_one="الصفحة الرئيسية" dir_two="الخدمات الاستشارية" dir_three=""/>
    <AllService/>

</template>

<script>
import AllService from "@/components/Local/AllService/AllService.vue";
import Dir from "@/components/Global/Dir/Dir.vue";
export default {
  
  name: 'Service',
  components:{
    Dir,
    AllService
  }
}
</script>

