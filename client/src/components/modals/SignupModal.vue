<template>
  <b-modal id="my-modal"
    v-model="showModal"
    title="Signup"
    @ok="handleSubmit"
    @hidden="$emit('close')"
  >
    <b-form @submit.stop.prevent="handleSubmit">
      <div class="container-fluid">
        <div class="row">
          <b-form-input
            id="signupFirstName"
            class="col mr-1"
            v-model="formData.firstName"
            type="text"
            required
            placeholder="First Name"
          />
          <b-form-input
            id="signupLastName"
            class="col"
            v-model="formData.lastName"
            type="text"
            required
            placeholder="Last Name"
          />
        </div>
      </div>
      <b-form-input
        id="signupEmail"
        class="mt-2"
        v-model="formData.email"
        type="email"
        required
        placeholder="Enter email"
      />
      <b-form-input
        id="signupPassword"
        class="mt-2"
        v-model="formData.password"
        type="password"
        required
        placeholder="Enter Password"
      />
      <b-form-input
        id="confirmPassword"
        class="mt-2"
        v-model="formData.confirmPassword"
        type="password"
        required
        placeholder="Confirm Password"
      />
    </b-form>
  </b-modal>
</template>

<script>
import Noty from 'noty';
// import Cookies from 'js-cookie';
import userService from '../../services/UserService';
import { messageOptions } from '../../constants';

export default {
  name: 'LoginModal',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: () => (false),
    },
  },
  methods: {
    async handleSubmit(bvModalEvt) {
      if (this.formData.password !== this.formData.confirmPassword) {
        new Noty({
          ...messageOptions,
          type: 'error',
          text: 'Password did not match',
        }).show();
        bvModalEvt.preventDefault();
        return;
      }
      try {
        await userService.signup(this.formData);
      } catch (error) {
        console.log(error);
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
        text: 'User was successfully registered',
      }).show();
    },
  },
};
</script>

<style>

</style>
