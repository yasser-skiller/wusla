<template>
  <div>
    <div class="mt-4">
      <p class="TitleFont text-center">البرامج التأهيلية</p>
    </div>
    <SimpaleSec />
    <!-- <div class="d-flex flex-wrap pb-4 justify-content-between">
      <AboutTaskes v-for="task in tasks" :key="task.id" :name="task" />
    </div> -->
  </div>
</template>

<script>
import SimpaleSec from "@/components/Global/SimpaleSec/SimpaleSec.vue";

export default {
  name: "AllProgrames",
  components: {
    SimpaleSec,
  },
//   mounted() {
//     this.fetchData();
//   },
//   data() {
//     return {
//       tasks: [],
//     };
//   },
//   methods: {
//     async fetchData() {
//       const res = await fetch("Data.json");
//       const val = await res.json();
//       this.tasks = val.AboutTaskes;
//     },
//   },
};
</script>
