<template>
  <div>
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">

        <SimpaleSec
          v-for="pro in programmes"
          :key="pro.id"
          :name="pro"
          path="/ProgrammeDetails"
          @click="
            it = pro.id;
            emitId();
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
  name: "AllProgrames",
  components: {
    SimpaleSec,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      it: null,
      programmes: [],
    };
  },

  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://waslapanel.thinkvolc.com/api/programs`
        );
        this.programmes = res.data;
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    },
    emitId() {
      EventBus.$emit("IdValue", this.it);
    },
  },
};
</script>
