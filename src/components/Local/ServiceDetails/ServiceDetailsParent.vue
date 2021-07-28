<template>
  <div class="container">
    <section class="d-flex flex-wrap">
      <div class="col-12 col-md-5 px-4">
        <div class="d-flex justify-content-center align-items-center my-3">
          <img :src="ServicesDetails.thumbnail" class="img" />
        </div>
      </div>
      <div class="col-12 col-md-6 px-4 my-3">
        <h4 class="fw-bold mb-3">وصف البرنامج</h4>
        <p class="SecGrayColor">{{ ServicesDetails.description }}</p>
      </div>
    </section>
    <section class="my-5 px-3">
      <h4 class="fw-bold mb-3">محتويات الخدمة</h4>
      <p class="SecGrayColor">خطة استراتيجية اتصالية تشمل</p>
      <ul class="my-3">
        <li v-for="item in ServicesDetails.content" :key="item.id">{{ item }}</li>
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
import { EventBus } from "@/main.js";

import AskService from "@/components/Global/AskService/AskService.vue";

export default {
  name: "ServiceDetailsParent",
  components: {
    AskService,
  },
  data() {
    return {
      item: null,
      isActive: true,
      ServicesDetails: [],
    };
  },
  created() {
    this.item = this.$route.params.id;
    EventBus.$on("ServicesDetails", (value) => {
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
          `https://waslapanel.thinkvolc.com/api/services/${this.item}`
        );
        this.ServicesDetails = res.data;
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
.active {
  display: none;
}
</style>
