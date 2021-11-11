<template>
  <div id="app">
    <div v-if="!isLoggedIn" class="login">
      <login />
    </div>
    <div v-else class="page">
      <navBar />
      <div class="viewport">
        <sideBar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import sideBar from "@/components/sideBar.vue";
import login from "@/views/login.vue";
export default {
  components: {
    navBar,
    sideBar,
    login,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  // title: "this.pageTitle",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
@import "@/assets/scss/forms.scss";
</style>
