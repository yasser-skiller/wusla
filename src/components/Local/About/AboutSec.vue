<template>
  <div class="d-flex flex-wrap py-4 justify-content-between">
    <div class="col-11 col-lg-6 mx-auto">
      <p class="TitleFont">عن وصلة</p>
      <div class="txt">
        <p>{{ Abouts.info_one }}</p>
      </div>

      <p class="txt_Two my-3">{{ Abouts.info_two }}</p>

      <p>{{ Abouts.info_three }}</p>
    </div>

    <div
      class="
        col-12
        p-0
        col-lg-6
        mx-auto
        align-items-center
        justify-content-between
      "
    >
      <img :src="Abouts.img" class="About_img" />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AboutSec",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Abouts: [],
    };
  },
  
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.Abouts = res.data.About;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.txt {
  border-right: 5px solid var(--mainColor);
  padding-right: 10px;
}
.txt_Two {
  color: var(--SecGrayColor);
}
.About_img {
  width: 300px;
}
</style>
