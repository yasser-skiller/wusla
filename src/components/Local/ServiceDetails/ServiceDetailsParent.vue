<template>
  <div class="container">
    <section class="d-flex flex-wrap">
      <div class="col-12 col-md-6 px-4">
        <div class="d-flex justify-content-center align-items-center my-3">
          <img :src="ServicesDetails.img" class="img" />
        </div>
      </div>
      <div class="col-12 col-md-6 px-4 my-3">
        <h4>{{ ServicesDetails.title }}</h4>
        <p class="SecGrayColor">{{ ServicesDetails.txt }}</p>
      </div>
    </section>
    <section class="my-5 px-3">
      <h4>محتويات الخدمة</h4>
      <p class="SecGrayColor">خطة استراتيجية اتصالية تشمل</p>
      <ul class="my-3">
        <li v-for="item in ServicesDetails.Des" :key="item.id">{{ item }}</li>
      </ul>
    </section>

    <div class="d-flex justify-content-center my-5">
      <button
        @click="isActive = flase"
        type="submit"
        class="mt-4 btn btn-primary bg-MainColor border border-danger"
      >
        اطلب الخدمة
      </button>
    </div>
    <div :class="{ active: isActive }">
      <AskService />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AskService from "@/components/Global/AskService/AskService.vue";

export default {
  name: "ServiceDetailsParent",
  components: {
    AskService,
  },
  mounted() {
    this.fetchData();
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      isActive: true,
      ServicesDetails: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.ServicesDetails = res.data.ServicesHome[0].Details;
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
.active {
  display: none;
}
</style>
