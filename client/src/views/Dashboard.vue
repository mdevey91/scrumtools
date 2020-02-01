<template>
  <div>
    <h1>User dashboard page!!</h1>
    <b-button @click="handleRetroBoardCreation">Create Retro Board</b-button>
    <createScrumBoardModal :showModal="showScrumBoardModal" @close="handleClose"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createScrumBoardModal from '../components/modals/CreateScurmBoardModal.vue';

export default {
  name: 'dashboard',
  data() {
    return {
      showScrumBoardModal: false,
    };
  },
  components: {
    createScrumBoardModal,
  },
  computed: {
    ...mapState(),
  },
  methods: {
    ...mapActions([]),
    async handleRetroBoardCreation() {
      this.showScrumBoardModal = true;
      // console.log('called handleRetroBoardCreation!');
      // const resp = await retroBoardService.createScrumBoard();
      // console.log('response from retroBoardService.createScrumBoard(): ', resp);
    },
    handleClose() {
      this.showScrumBoardModal = false;
    },
  },
};
</script>

<style>

</style>
