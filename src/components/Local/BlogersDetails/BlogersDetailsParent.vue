<template>
  <div class="container">
    <div class="col-12">
      <img :src="Blogers_Details.thumbnail" class="img" />
    </div>
    <div class="my-5">
      <h5>{{ Blogers_Details.title }}</h5>
      <p class="SecGrayColor my-3">{{ Blogers_Details.description }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { EventBus } from "@/main.js";

export default {
  name: "BlogersDetailsParent",
  data() {
    return {
      item: null,
      Blogers_Details: [],
    };
  },
  created() {
    this.item = this.$route.params.id;
    EventBus.$on("IdBlogerValue", (value) => {
      this.item = value;
    });
  },
  mounted() {
    setTimeout(() => {
      this.fetchData();
    }, 200);
    document.documentElement.scrollTop = 0;
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://waslapanel.thinkvolc.com/api/posts/${this.item}`
        );
        this.Blogers_Details = res.data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 300px;
  border-radius: 25px;
}
</style>
