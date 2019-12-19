<template>
  <div class="home">
    <b-jumbotron
      class="business-meeting-jumbotron align-middle"
      header="Take your scrum retros to the next level"
    >
      <h4>
        Be able to collaborate with distributed teams for scrum retros.
        Be able to better join in on meetings.
        Be able to revist previous meetings.
      </h4>
    </b-jumbotron>
    <b-card-group deck>
      <b-card header="Collaboration" class="text-center">
        <b-card-text>Be able to work with distributed teams like never before!</b-card-text>
      </b-card>

      <b-card header="Convenient" class="text-center">
    <b-card-text>Be able to have a scrum retro where everyone can easliy participate!</b-card-text>
      </b-card>

      <b-card header="Transparency" class="text-center">
        <b-card-text>Be able to revisit previous retros in order to follow up!</b-card-text>
      </b-card>
    </b-card-group>
    <b-jumbotron
      class="computer-jumbotron align-middle mt-4"
      header="Testimonials"
    >
      <h4>"Every since using scrumtool.com out scrum retros have been so much better" -Anonymous User</h4>
      <h4>"We are able to collaborate so much better with our remote team members" -Anonymous User</h4>
      <h4>"I can't imagine doing a scrum retro with this tool!" -Anonymous User</h4>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.business-meeting-jumbotron {
  background-image: url('..\assets\business_meeting2.jpg');
  background-size: cover;
  min-height: 70vh;
  background-attachment: fixed;
}

.computer-jumbotron {
  background-image: url('..\assets\stock-computer.jpg');
  background-size: cover;
  min-height: 70vh;
  background-attachment: fixed;
}
</style>
