<template>
  <div>
    <div class="mt-4">
      <Title title="الأدوار" />
    </div>
    <div class="d-flex flex-wrap pb-4 justify-content-between">
      <AboutTaskes v-for="task in tasks" :key="task.id" :name="task" />
    </div>
  </div>
</template>

<script>
import AboutTaskes from "@/components/Local/About/AboutTaskes.vue";
import Title from "@/components/Global/Title/Title.vue";
import axios from "axios";

export default {
  name: "AboutAllTaskes",
  components: {
    AboutTaskes,
    Title,
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
      try {
        const res = await axios.get(`Data.json`);
        this.tasks = res.data.AboutTaskes;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
