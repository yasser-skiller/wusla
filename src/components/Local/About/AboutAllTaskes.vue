<template>
  <div>
    <div class="mt-4">
      <p class="TitleFont text-center">الأدوار</p>
    </div>
    <div class="d-flex flex-wrap pb-4 justify-content-between">
      <AboutTaskes v-for="task in tasks" :key="task.id" :name="task" />
    </div>
  </div>
</template>

<script>
import AboutTaskes from "@/components/Local/About/AboutTaskes.vue";

export default {
  name: "AboutAllTaskes",
  components: {
    AboutTaskes,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("Data.json");
      const val = await res.json();
      this.tasks = val.AboutTaskes;
    },
  },
};
</script>
