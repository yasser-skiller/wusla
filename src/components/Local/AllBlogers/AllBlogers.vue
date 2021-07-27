<template>
  <div>
    <div class="container">
      <section class="d-flex flex-wrap justify-content-start my-5">
        <SimpaleSec
          v-for="Bloger in Blogers"
          :key="Bloger.id"
          :name="Bloger"
          path="/BlogersDetails"
          @click="
            ite = Bloger.id;
            emitBlogersDetailsId();
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
  name: "AllBloger",
  components: {
    SimpaleSec,
  },
  mounted() {
    this.fetchData();
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      ite: null,
      Blogers: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://waslapanel.thinkvolc.com/api/posts`
        );
        this.Blogers = res.data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    emitBlogersDetailsId() {
      EventBus.$emit("IdBlogerValue", this.ite);
    },
  },
};
</script>
