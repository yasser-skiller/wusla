<template>
  <div>
    
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">
        <SimpaleSec
          v-for="Service in Services"
          :key="Service.id"
          :name="Service"
          path="/ServicesDetails"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SimpaleSec from "@/components/Global/SimpaleSec/SimpaleSec.vue";

import axios from "axios";

export default {
  name: "AllServices",
  components: {
    SimpaleSec,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      item: 0,
      Services: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.Services = res.data.ServicesHome;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
