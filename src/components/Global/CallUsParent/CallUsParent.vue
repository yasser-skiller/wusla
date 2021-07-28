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
      <div
        v-if="resCase === 200"
        class="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        <strong>تم </strong> الإرسال بنجاح.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div
        v-if="resCase === 404"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>خطأ</strong> {{ resErorr }}

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div
        v-if="resCase === 429"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>برجاء الإنتظار</strong> لارسال طلب اخر او حاول في وقت لاحق.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div v-if="Mess !== ''" class="alert alert-danger" role="alert">
        {{ Mess }}
      </div>

       <div v-if="warning !== ''" class="alert alert-warning " role="alert">
        {{ warning  }}
      </div>

      <form id="Form">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputPassword1">الاسم</label>
            <input
              type="text"
              v-model="name"
              class="form-control my-2"
              name="name"
              placeholder="الاسم"
            />
          </div>
          <div class="form-group col-12 col-md-6 px-3 mb-2">
            <label for="exampleInputPassword1">الجهة</label>
            <input
              type="text"
              v-model="entity"
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
              v-model="email"
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
              v-model="number"
              type="number"
              class="form-control my-2"
              placeholder="رقم الجوال"
            />
          </div>
        </div>

        <div class="form-group col-12 mb-2 px-3">
          <label>الموضوع </label>
          <textarea
            class="form-control"
            v-model="subject"
            name="subject"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div class="d-flex justify-content-center align-items-center">
        <button
          v-on:click="submi"
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
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CallUsParent",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Slider_imgs: [],
      order: "",
      name: "",
      entity: "",
      email: "",
      number: "",
      subject: "",
      resCase: null,
      resErorr: "",
      Mess: "",
      warning :""
    };
  },
  methods: {
    submi() {
      if (
        this.name === "" ||
        this.entity === "" ||
        this.email === "" ||
        this.number === "" ||
        this.subject === ""
      ) {
        this.Mess = "ادخل البيانات بجميع الحقول";
      } else {
        this.Mess = ''
        this.warning = 'جاري الأرسال....'
        const info = {
          name: this.name,
          entity: this.entity,
          email: this.email,
          number: this.number,
          subject: this.subject,
        };
        axios
          .post(`https://waslapanel.thinkvolc.com/api/contact`, info)
          .then((res) => {
            console.log(res);
            console.log(res.status);
            this.resCase = res.status;
            this.warning = ''
          })
          .catch((error) => {
            console.log(error);
            this.resErorr = error;
          });
      }
    },
    async fetchData() {
      const res = await fetch("Data.json");
      const val = await res.json();
      this.Slider_imgs = val.Logo;
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
