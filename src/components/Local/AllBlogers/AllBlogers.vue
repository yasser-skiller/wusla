<template>
  <div>
    
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">
        <SimpaleSec
          v-for="Bloger in Blogers"
          :key="Bloger.id"
          :name="Bloger"
          path="/BlogersDetails"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SimpaleSec from "@/components/Global/SimpaleSec/SimpaleSec.vue";

import axios from "axios";

export default {
  name: "AllBloger",
  components: {
    SimpaleSec,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      item: 0,
      Blogers: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.Blogers = res.data.BlogersHome;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
