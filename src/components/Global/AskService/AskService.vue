<template>
  <div class="parent">
    <div class="style_form">
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

        <div v-if="warning !== ''" class="alert alert-warning" role="alert">
          {{ warning }}
        </div>

        <div class="w-100">
          <h4 class="text-center my-4">اطلب الخدمة</h4>
        </div>
        <form method="post" action="https://waslapanel.thinkvolc.com/api/order">
          <div class="d-flex flex-wrap">
            <div class="form-group col-12 col-md-6 px-3 mb-2">
              <label for="exampleInputPassword1">الاسم</label>
              <input
                type="text"
                v-model="name"
                name="name"
                class="form-control"
                placeholder="الاسم"
              />
            </div>
            <div class="form-group col-12 col-md-6 px-3 mb-2">
              <label for="exampleInputPassword1">الجهة</label>
              <input
                v-model="entity"
                type="text"
                name="entity"
                class="form-control"
                placeholder="الجهة"
              />
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <div class="form-group col-12 col-md-6 px-3 mb-2">
              <label for="exampleInputEmail1">البريد الالكتروني </label>
              <input
                type="email"
                v-model="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="البريد الالكتروني "
              />
            </div>
            <div class="form-group col-12 col-md-6 px-3 mb-2">
              <label for="exampleInputPassword1">رقم الجوال</label>
              <input
                type="number"
                name="number"
                v-model="number"
                class="form-control"
                placeholder="رقم الجوال"
              />
            </div>
          </div>

          <div class="form-group col-12 my-3 px-3">
            <label>الخدمة </label>
            <select class="form-control" v-model="service" name="service">
              <option>خدمة 1</option>
              <option>خدمة 2</option>
              <option>خدمة 3</option>
            </select>
          </div>

          <div class="form-group col-12 px-3">
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
            class="mt-4 btn btn-primary bg-MainColor border border-danger"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AskService",
  data() {
    return {
      name: "",
      entity: "",
      email: "",
      number: "",
      subject: "",
      service: "",
      resCase: null,
      resErorr: "",
      Mess: "",
      warning: "",
    };
  },
  methods: {
    submi() {
      if (
        this.name === "" ||
        this.entity === "" ||
        this.email === "" ||
        this.number === "" ||
        this.subject === "" ||
        this.service === ""
      ) {
        this.Mess = "ادخل البيانات بجميع الحقول";
      } else {
        this.Mess = "";
        this.warning = "جاري الأرسال....";
        const info = {
          name: this.name,
          entity: this.entity,
          email: this.email,
          number: this.number,
          subject: this.subject,
          service: this.service,
        };
        axios
          .post(`https://waslapanel.thinkvolc.com/api/order`, info)
          .then((res) => {
            console.log(res);
            console.log(res.status);
            this.resCase = res.status;
            this.warning = "";
          })
          .catch((error) => {
            console.log(error);
            this.resErorr = error;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
select,
input,
textarea,
.rounded {
  border-radius: 15px !important;
}
.parent {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.205);
  overflow-y: auto;
}
.style_form {
  position: absolute;
  z-index: 10;
  top: 20px;
  bottom: 20px;
  right: 5%;
  left: 5%;
  width: 90%;
}
</style>
