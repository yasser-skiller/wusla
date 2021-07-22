<template>
  <div class="home">
    <Slider />
    <div class="bg-gray">
      <div class="container py-4">
        <AboutSec />
        <AboutAllTaskes />
      </div>
    </div>
    <Title title="البرامج التأهيلية" />
    <AllProgrames />
    <Title title=" الخدمات الاستشارية" />
    <AllService />
    <Title title="  المدونة" />
    <AllBloger />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutSec from "@/components/Local/About/AboutSec.vue";
import AboutAllTaskes from "@/components/Local/About/AboutAllTaskes.vue";
import Slider from "@/components/Local/Slider/Slider.vue";
import AllProgrames from "@/components/Local/AllProgrames/AllProgrammes.vue";
import AllService from "@/components/Local/AllService/AllService.vue";
import AllBloger from "@/components/Local/AllBlogers/AllBlogers.vue";
import Title from "@/components/Global/Title/Title.vue";

export default {
  name: "Home",
  components: {
    AllService,
    AllBloger,
    Slider,
    AllProgrames,
    Title,
    AboutSec,
    AboutAllTaskes,
  },
  // data(){
  //   return{
  //     Comment :""
  //   }
  // }
};
</script>
