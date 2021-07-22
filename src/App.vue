<template>
  <div id="nav">
    <Header />
    <router-view />
    <CallUsParent />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Global/Header/Header.vue";
import Footer from "@/components/Global/Footer/Footer.vue";
import CallUsParent from "@/components/Global/CallUsParent/CallUsParent.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CallUsParent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Almarai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
  font-size: 16px;
  text-align: start !important;
}

a {
  text-decoration: none !important;
}

:root {
  --mainColor: #922d3e;
  --GrayColor: #fafafa;
  --SecGrayColor: #9a9a9a;
}
.TitleFont {
  font-size: 30px;
  font-weight: 700;
  color: var(--mainColor);
}
.mainColor {
  color: var(--mainColor);
}
.MainFont {
  font-size: 14px;
}
.bg-MainColor {
  background-color: var(--mainColor) !important;
}
.SecGrayColor {
  color: var(--SecGrayColor);
}
.bg-gray {
  background-color: var(--GrayColor);
}
.cursorPointer {
  cursor: pointer;
}
</style>
