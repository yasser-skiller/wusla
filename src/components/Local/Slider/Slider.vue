<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide bg-gray"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          :src="Slider_imgs.Slider_One"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          :src="Slider_imgs.Slider_One"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          :src="Slider_imgs.Slider_One"
          alt="Third slide"
        />
          
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Slider",
   mounted() {
    this.fetchData();
  },
  data() {
    return {
      Slider_imgs: [],
    };
  },
  methods: {
    async fetchData() {
       try {
        const res = await axios.get(`Data.json`);
        this.Slider_imgs = res.data.Slider;
      } catch (error) {
        console.log(error);
      }
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
