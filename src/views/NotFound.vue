<template>
  <div class="my-5 bg-gray p-5">
    <h2 class="mainColor text-center">هذا المسار غير صحيح...</h2>
  </div>
  <div class="d-flex justify-content-center mb-5">
    <router-link to="/">
      <a class="mt-4 btn btn-primary bg-MainColor border border-danger"
        >العودة إلي الصفحة الرئيسية</a
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
