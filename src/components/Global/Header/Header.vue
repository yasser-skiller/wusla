<template>
  <div class="mb-4">
    <nav class="navbar navbar-expand-lg navbar-light col-11 mx-auto">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex flex-column w-100 mx-auto">
          <ul
            class="col-11 d-flex flex-wrap justify-content-between mx-auto mb-0"
          >
            <div class="d-flex flex-wrap">
              <li class="mx-2">
                <a href="#" class="text-dark"
                  ><img :src="imgs.icon_phone" class="m-1" /> 00966501854780</a
                >
              </li>
              <li class="mx-2">
                <a href="#" class="text-dark"
                  ><img :src="imgs.icon_mail" class="m-1" />Info@wasla.net</a
                >
              </li>
            </div>
            <div>
              <li class="mx-2">
                <a href="#" class="text-dark"
                  ><img :src="imgs.icon_twitter" class="m-1" />@waslaCD</a
                >
              </li>
            </div>
          </ul>

          <ul class="col-11 mx-auto Parent_logo mb-0">
            <hr />
            <router-link to="/">
              <img :src="imgs.img_Logo" class="logo" />
            </router-link>
            <hr />
          </ul>

          <ul class="navbar-nav col-11 mx-auto HraderFont">
            <div class="d-flex">
              <router-link to="/" tag="li" class="nav-item" exact
                ><a class="nav-link">الرئيسية</a></router-link
              >
              <router-link to="/About" tag="li" class="nav-item"
                ><a class="nav-link">عن وصلة</a></router-link
              >
              <router-link to="/Programmes" tag="li" class="nav-item"
                ><a class="nav-link">البرامج التأهلية</a></router-link
              >
            </div>
            <div class="d-flex">
              <router-link to="/Service" tag="li" class="nav-item"
                ><a class="nav-link">الخدمات الاستشارية</a></router-link
              >
              <router-link to="/Bloger" tag="li" class="nav-item"
                ><a class="nav-link">مدونة وصلة</a></router-link
              >
              <router-link to="/CallUs" tag="li" class="nav-item"
                ><a class="nav-link">اتصل بنا</a></router-link
              >
            </div>
          </ul>
        </div>
      </div>

      <a class="navbar-brand" href="#">
        <img :src="imgs.img_SecLogo" class="Sec_logo" />
      </a>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      imgs: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.imgs = res.data.Logo;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
  div {
    justify-content: space-between;
  }
  .HraderFont {
    font-size: 18px;
  }
}
.Parent_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 120px;
  }
  hr {
    width: calc(50% - 90px);
    border: 1px solid var(--GrayColor);
  }
}
.Sec_logo {
  width: 80px;
}

.router-link-active a,
.fas {
  color: var(--mainColor) !important;
}
</style>
