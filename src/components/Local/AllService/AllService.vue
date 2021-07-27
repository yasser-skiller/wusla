<template>
  <div>
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">
        <SimpaleSec
          v-for="Service in Services"
          :key="Service.id"
          :name="Service"
          path="/ServicesDetails"
          @click="
            item = Service.id;
            emitServicesDetailsId();
          "
        />
      </section>
    </div>
  </div>
</template>

<script>
import SimpaleSec from "@/components/Global/SimpaleSec/SimpaleSec.vue";
import { EventBus } from "@/main.js";

import axios from "axios";

export default {
  name: "AllServices",
  components: {
    SimpaleSec,
  },
  mounted() {
    this.fetchData();
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      item: null,
      Services: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://waslapanel.thinkvolc.com/api/services/`
        );
        this.Services = res.data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    emitServicesDetailsId() {
      EventBus.$emit("ServicesDetails", this.item);
    },
  },
};
</script>
