<template>
  <div class="container">
    <section class="d-flex flex-wrap">
      <div class="col-12 col-md-6 px-4">
        <div class="d-flex justify-content-center align-items-center">
          <img :src="programmes_Details.thumbnail" class="img" />
        </div>
      </div>
      <div class="col-12 col-md-6 px-4">
        <h4>وصف البرنامج</h4>
        <p>{{ programmes_Details.description }}</p>
        <ul class="SecGrayColor">
          <li v-for="ele in programmes_Details.programmEle" :key="ele.id">
            {{ ele }}
          </li>
        </ul>
      </div>
    </section>
    <section class="my-5">
      <div class="text-center">
        <h4>محتوي البرنامج</h4>
        <p>{{ programmes_Details.content }}</p>
      </div>
      <section class="d-flex flex-wrap justify-content-start my-5">
        <ProgrammeDetailsChild
          v-for="info in programmes_Details_units"
          :key="info.id"
          :name="info"
        />
      </section>
      <div class="px-4">
        <p class="font-weight-bold">
          مدة البرنامج :
          <span class="mainColor"
            ><span>{{ programmes_Details.duration }}</span>
          </span>
        </p>
      </div>
      <div class="d-flex justify-content-center">
        <button
          @click="isActive = flase"
          type="submit"
          class="mt-4 btn btn-primary bg-MainColor border border-danger"
        >
          اطلب الخدمة
        </button>
      </div>
      <div :class="{ active: isActive }" class="paclose">
        <div @click="isActive = true" class="close">x</div>
        <AskService />
      </div>
    </section>
  </div>
</template>
<script>
import AskService from "@/components/Global/AskService/AskService.vue";
import ProgrammeDetailsChild from "@/components/Local/ProgrammeDetails/ProgrammeDetailsChild.vue";
import axios from "axios";
import { EventBus } from "@/main.js";

export default {
  name: "ProgrammeDetailsParent",
  components: {
    ProgrammeDetailsChild,
    AskService,
  },

  data() {
    return {
      item: null,
      isActive: true,
      programmes_Details: [],
      programmes_Details_units: [],
      // programmes_Details_units_json : JSON.parse(programmes_Details_units)
    };
  },
  created() {
    this.item = this.$route.params.id;
    EventBus.$on("IdValue", (value) => {
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
          `https://waslapanel.thinkvolc.com/api/programs/${this.item}`
        );
        this.item = res.data.id;
        console.log(res.data);
        this.programmes_Details = res.data;
        this.programmes_Details_units = JSON.parse(res.data.units);
        console.log(res.data);
        console.log(res.data.units);
        console.log(JSON.parse(this.programmes_Details_units));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.paclose {
  position: relative;
}
.close {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 35px;
  right: 285px;
  z-index: 100;
  color: crimson;
  cursor: pointer;
}
.img {
  width: 350px;
  height: 250px;
  border-radius: 15px;
}
.active {
  display: none;
}
</style>
