<template>
  <div ref="container">
    <b-button @click="createNote">click me</b-button>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex';
import Vue from 'vue';
import StickyNote from '../components/StickyNote.vue';

export default {
  data() {
    return {

    };
  },
  methods: {
    createNote() {
      const StickyNoteClass = Vue.extend(StickyNote);
      const StickyNoteInstance = new StickyNoteClass();
      StickyNoteInstance.$mount();
      this.$refs.container.appendChild(StickyNoteInstance.$el);
    },
  },
};
</script>

<style>

</style>
