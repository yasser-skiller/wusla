<template>
  <div class="Slider">
    <div class="slide">
      <img :src="Slider_imgs[Select]" />
    </div>
    <!-- <div class="paPatrent"> -->
    <!-- <span class="pa"></span> -->
    <!-- <span class="pa"></span>
      <span class="pa"></span>
      <span class="pa"></span> -->

    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Slider",
  mounted() {
    this.fetchData();
    this.RandomImg();
    // this.RandomPa();
  },
  data() {
    return {
      Select: 0,
      Slider_imgs: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://waslapanel.thinkvolc.com/api/slider`
        );
        this.Slider_imgs = res.data;
        this.Select = 0;
        console.log(res.data);
        console.log(this.Slider_imgs.length);
      } catch (error) {
        console.log(error);
      }
    },
    // RandomPa(){
    //   let NewPa = document.createElement('span');
    //     NewPa.classList.add('pa')
    //     document.querySelector('.paPatrent').appendChild(NewPa);
    // },
    RandomImg() {
      setInterval(() => {
        if (this.Select + 1 === this.Slider_imgs.length) {
          this.Select = -1;
          this.Select++;
        } else {
          this.Select++;
        }
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.Slider {
  position: relative;
  .paPatrent {
    position: absolute;
    width: 100%;
    height: fit-content;
    bottom: 50px;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: gray;
      margin: 0 5px;
    }
  }
  .slide {
    width: 100%;
    height: 450px;
    @media (max-width: 767px) {
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
