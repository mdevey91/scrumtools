<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">ScrumTools</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right v-if="jwt">
          <b-nav-item right @click="logout">log out</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav right v-else>
          <b-nav-item right @click="login">login</b-nav-item>
          <b-nav-item right @click="signup">signup</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
    <loginModal :showModal="showLoginModal" @close="handleClose" />
    <signupModal :showModal="showSignupModal" @close="handleClose" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import loginModal from '@/components/modals/LoginModal.vue';
import signupModal from '@/components/modals/SignupModal.vue';


export default {
  name: 'Navbar',
  components: {
    loginModal,
    signupModal,
  },
  data() {
    return {
      showLoginModal: false,
      showSignupModal: false,
    };
  },
  computed: {
    ...mapState(['jwt']),
  },
  methods: {
    ...mapActions(['setUser', 'setJwt', 'setCurrentScrumBoard']),
    login() {
      this.showLoginModal = !this.showLoginModal;
    },
    signup() {
      this.showSignupModal = !this.showSignupModal;
    },
    logout() {
      this.setJwt(null);
      this.setUser(null);
      this.setCurrentScrumBoard(null);
      this.$router.push({ name: 'home' });
    },
    handleClose() {
      this.showSignupModal = false;
      this.showLoginModal = false;
    },
  },
};
</script>

<style>

</style>
