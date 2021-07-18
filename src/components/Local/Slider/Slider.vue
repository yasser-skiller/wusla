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
        <div class="carousel-caption d-none d-md-block">
          <h1 class="font-weight-bold">تعميق أثر المشاريع التنموية</h1>
        </div>
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
      const res = await fetch("Data.json");
      const val = await res.json();
      this.Slider_imgs = val.Slider;
      console.log(val.Slider)
    },
  },

};
</script>

<style lang="scss" scoped></style>
