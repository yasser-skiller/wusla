<template>
  <div class="CallUs" id="CallUs" style="margin-bottom: 90px">
    <div class="conteact_txt">
      <h2 class="font-weight-bold text-white text-center">تواصل معنا</h2>
    </div>

    <img :src="Slider_imgs.connact" />

    <div
      class="
        container
        border
        rounded
        p-4
        formPart
        bg-white
        shadow
        col-11 col-md-8
      "
    >
      <form id="Form">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputPassword1">الاسم</label>
            <input
              type="text"
              class="form-control my-2"
              name="name"
              placeholder="الاسم"
            />
          </div>
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputPassword1">الجهة</label>
            <input
              type="text"
              name="entity"
              class="form-control my-2"
              placeholder="الجهة"
            />
          </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputEmail1">البريد الالكتروني </label>
            <input
              type="email"
              class="form-control my-2"
              name="email"
              aria-describedby="emailHelp"
              placeholder="البريد الالكتروني "
            />
          </div>
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputPassword1">رقم الجوال</label>
            <input
              name="number"
              type="number"
              class="form-control my-2"
              placeholder="رقم الجوال"
            />
          </div>
        </div>

        <div class="form-group col-12 mb-2 px-3">
          <label>الموضوع </label>
          <textarea class="form-control" name="subject" rows="3"></textarea>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          
        </div>
      </form>
      <p  v-on:click="ubmit">wertwert</p>
      <button
            
            class="
              mt-4
              px-4
              py-2
              btn btn-primary
              bg-MainColor
              border border-danger
            "
          >
            ارسال
          </button>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "CallUsParent",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Slider_imgs: [],
      order: "",
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("Data.json");
      const val = await res.json();
      this.Slider_imgs = val.Logo;
    },
  },
  ubmit() {
    
    console.log(3);
    // const info = document.querySelector("Form").serialize();
    // console.log(info);
    // axios
    //   .post(`https://waslapanel.thinkvolc.com/api/contact`,info)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.CallUs {
  position: relative;
  .conteact_txt {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
  }
  .formPart {
    position: absolute;
    top: 175px;
    right: 0;
    left: 0;
  }
  img {
    width: 100%;
    height: 300px;
  }
}
.rounded,
textarea,
input,
button {
  border-radius: 20px !important;
}

.space {
  height: 350px;
  @media (max-width: 535px) {
    height: 460px;
  }
}
</style>
