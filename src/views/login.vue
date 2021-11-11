<template>
  <div class="login">
    <div class="login-content">
      <div class="title">Login</div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Username"
          name="username"
          id="username"
          required
        />
        <label for="username" class="form__label">Username</label>
      </div>
      <div class="form__group field">
        <input
          type="password"
          class="form__field"
          placeholder="Password"
          name="password"
          id="password"
          required
        />
        <label for="password" class="form__label">Password</label>
      </div>
      <div class="reset">Forgot Password?</div>
      <div @click="subbmit" class="bubbly-button">
        <div v-if="!isSubmited">LOGIN</div>
        <i v-else class="fas fa-circle-notch fa-spin"></i>
      </div>
      <!-- <div class="sso-group">
        <div class="subtitle">Use SSO</div>
        <div class="sso-listing">
          <div class="sso-item"></div>
        </div>
      </div> -->
      <div class="login-footer">Making ISPs work smarter not harder</div>
    </div>
  </div>
</template>

<script>
export default {
  title: "ISP Smart - Login",
  data() {
    return {
      isSubmited: false,
    };
  },
  methods: {
    subbmit() {
      this.isSubmited = true;
      let that = this;
      setTimeout(function () {
        that.$vToastify.error("Login Timed out. Please try again.");
        that.isSubmited = false;
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/login.scss";
</style>