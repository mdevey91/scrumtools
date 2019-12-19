<template>
  <b-modal id="my-modal"
    v-model="showModal"
    title="Login"
    @ok="handleSubmit"
    @hidden="$emit('close')"

  >
    <b-form @submit.stop.prevent="handleSubmit">
      <b-form-input
        id="loginEmail"
        v-model="formData.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>

      <b-form-input
        id="loginPassword"
        class="mt-2"
        v-model="formData.password"
        type="password"
        required
        placeholder="Enter Password"
        ></b-form-input>
    </b-form>
  </b-modal>
</template>

<script>
import Noty from 'noty';
import Cookies from 'js-cookie';
import { mapActions } from 'vuex';
import userService from '../services/UserService';
import { messageOptions } from '../constants';

export default {
  name: 'LoginModal',
  props: {
    showModal: {
      type: Boolean,
      default: () => (false),
    },
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['setUser']),
    async handleSubmit(bvModalEvt) {
      try {
        const { data: loginData } = await userService.login(this.formData);
        console.log(loginData);
        Cookies.set('jwt', loginData.jwtToken);
        this.setUser(loginData.user);
        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        new Noty({
          ...messageOptions,
          type: 'error',
          text: error.message,
        }).show();
        bvModalEvt.preventDefault();
        return;
      }
      new Noty({
        ...messageOptions,
        type: 'success',
        text: 'User was successfully logged in',
      }).show();
    },
  },
};
</script>

<style>

</style>
