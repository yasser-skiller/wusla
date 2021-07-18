<template>
  <div class="about bg-gray">
    <div class="container">
      <AboutSec />
      <AboutAllTaskes />
    </div>
  </div>
</template>

<script>
import AboutSec from "@/components/Local/About/AboutSec.vue";
import AboutAllTaskes from "@/components/Local/About/AboutAllTaskes.vue";

export default {
  name: "About",
  components: {
    AboutSec,
    AboutAllTaskes
  },
};
</script>
