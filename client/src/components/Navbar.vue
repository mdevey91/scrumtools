<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
        <b-nav-item right @click="login">login</b-nav-item>
        <b-nav-item right @click="signup">signup</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <loginModal :showModal="showLoginModal" @close="handleClose" />
  <signupModal :showModal="showSignupModal" @close="handleClose" />
</div>
</template>

<script>
import loginModal from '@/components/LoginModal.vue';
import signupModal from '@/components/SignupModal.vue';


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
  methods: {
    login() {
      console.log('clicked on login');
      this.showLoginModal = !this.showLoginModal;
    },
    signup() {
      console.log('clicked on signup');
      this.showSignupModal = !this.showSignupModal;
    },
    handleClose() {
      console.log('handleClose in navbar');
      this.showSignupModal = false;
      this.showLoginModal = false;
    },
  },
};
</script>

<style>

</style>
