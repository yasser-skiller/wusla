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
        <div class="w-100">
          <h4 class="text-center my-4">اطلب الخدمة</h4>
        </div>
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
            <label>الخدمة </label>
            <select class="form-control">
              <option>خدمة 1</option>
              <option>خدمة 2</option>
              <option>خدمة 3</option>
            </select>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "AskService",
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
  right: 10%;
  left: 10%;
  width: 80%;
}
</style>
