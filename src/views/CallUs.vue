<template>
  <div class="CallUs" id="CallUs" style="margin-bottom: 90px">
    <div class="conteact_txt">
      <h2 class="font-weight-bold text-white text-center">تواصل معنا</h2>
    </div>

    <img :src="Slider_imgs.Slider_One" />

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
      <form>
        <div class="d-flex flex-wrap">
          <div class="form-group col-12 col-md-6">
            <label for="exampleInputPassword1">الاسم</label>
            <input type="text" class="form-control" placeholder="الاسم" />
          </div>
          <div class="form-group col-12 col-md-6">
            <label for="exampleInputPassword1">الجهة</label>
            <input type="text" class="form-control" placeholder="الجهة" />
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <div class="form-group col-12 col-md-6">
            <label for="exampleInputEmail1">البريد الالكتروني </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="البريد الالكتروني "
            />
          </div>
          <div class="form-group col-12 col-md-6">
            <label for="exampleInputPassword1">رقم الجوال</label>
            <input
              type="number"
              class="form-control"
              placeholder="رقم الجوال"
            />
          </div>
        </div>

        <div class="form-group col-12">
          <label>الموضوع </label>
          <textarea class="form-control" rows="3"></textarea>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            class="mt-4 btn btn-primary bg-MainColor border border-danger"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
    <div style="height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "CallUs",
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
    },
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
.rounded {
  border-radius: 20px !important;
}
</style>
