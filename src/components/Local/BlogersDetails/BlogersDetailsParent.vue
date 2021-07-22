<template>
  <div class="container">
    <div class="col-12">
      <img :src="Blogers_Details.cover_img" class="img" />
    </div>
    <div class="my-5">
      <h5>{{ Blogers_Details.title }}</h5>
      <p class="SecGrayColor my-3">{{ Blogers_Details.txt }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "BlogersDetailsParent",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Blogers_Details: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.Blogers_Details = res.data.BlogersHome[0].Details[0];
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
