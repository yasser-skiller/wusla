<template>
  <div>
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">
        <SimpaleSec
          v-for="pro in programmes"
          :key="pro.id"
          :name="pro"
          path="/ProgrammeDetails"
          v-on:click="item = pro.id"
          
        />
      </section>
    </div>
  </div>
</template>

<script>
import SimpaleSec from "@/components/Global/SimpaleSec/SimpaleSec.vue";

import axios from "axios";

export default {
  name: "AllProgrames",
  components: {
    SimpaleSec,
  },
   provide:{
    user: "yasser"
  },
  created() {
    console.log(`Injected property: ${this.user}`) // > Injected property: John Doe
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      item: 0,
      programmes: [],
    };
  },
 
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.programmes = res.data.ProgrammesHome;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
