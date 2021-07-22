<template>
  <div class="hello">
    <Slider />
    <AllProgrames />
  </div>
</template>

<script>
import Slider from "@/components/Local/Slider/Slider.vue";
import AllProgrames from "@/components/Local/AllProgrames/AllProgrammes.vue";
export default {
  name: "HelloWorld",

  components: {
    Slider,
    AllProgrames,
  },
};
</script>
