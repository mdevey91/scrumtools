<template>
  <div>
    <h1>User dashboard page!!</h1>
    <b-button @click="handleRetroBoardCreation">Create Retro Board</b-button>
    <createScrumBoardModal :showModal="showScrumBoardModal" @close="handleClose"/>
    <StickyNote/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createScrumBoardModal from '../components/modals/CreateScurmBoardModal.vue';
import StickyNote from '../components/StickyNote.vue';

export default {
  name: 'dashboard',
  components: {
    createScrumBoardModal,
    StickyNote,
  },
  data() {
    return {
      showScrumBoardModal: false,
    };
  },
  computed: {
    ...mapState(),
  },
  methods: {
    ...mapActions([]),
    async handleRetroBoardCreation() {
      this.showScrumBoardModal = true;
    },
    handleClose() {
      this.showScrumBoardModal = false;
    },
  },
};
</script>

<style>

</style>
