<template>
  <b-modal id="my-modal"
    v-model="showModal"
    title="Create new scrum retro board"
    @ok="handleSubmit"
    @hidden="$emit('close')"

  >
    <b-form @submit.stop.prevent="handleSubmit">
      <b-form-input
        id="name"
        v-model="formData.name"
        type="text"
        required
        placeholder="Enter Name"
      ></b-form-input>
    </b-form>
  </b-modal>
</template>

<script>
import Noty from 'noty';
import { mapActions } from 'vuex';

import retroBoardService from '../../services/RetroBoardService';
import { messageOptions } from '../../constants';

export default {
  name: 'CreateScrumBoardModal',
  props: {
    showModal: {
      type: Boolean,
      default: () => (false),
    },
  },
  data() {
    return {
      formData: {
        name: '',
      },
    };
  },
  methods: {
    ...mapActions(['setCurrentScrumBoard']),
    async handleSubmit(bvModalEvt) {
      if (!this.formData.name) {
        new Noty({
          ...messageOptions,
          type: 'error',
          text: 'Please fill in a name',
        }).show();
        bvModalEvt.preventDefault();
        return;
      }
      try {
        const retroBoard = await retroBoardService.createScrumBoard(this.formData);
        this.setCurrentScrumBoard(retroBoard);
      } catch (error) {
        console.warn(error);
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
        text: 'Dashboard created',
      }).show();
    },
  },
};
</script>

<style>

</style>
