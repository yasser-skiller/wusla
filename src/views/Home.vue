<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Slider />
    <AllProgrames />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Slider from "@/components/Local/Slider/Slider.vue";
import AllProgrames from "@/components/Local/AllProgrames/AllProgrammes.vue";

export default {
  name: "Home",
  components: {
    Slider,
    AllProgrames,
  },
};
</script>
