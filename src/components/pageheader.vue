<template>
  <div class="pageheader">
    <div class="text-group">
      <h1 class="title">{{ title }}</h1>
      <div class="description">
        <p class="dark">
          <VueShowdown :markdown="description" flavor="github" />
        </p>
      </div>
    </div>
    <img class="ripped-edge" src="../assets/img/ripped2.png" />
  </div>
</template>

<script>
  import { VueShowdown } from 'vue-showdown';
  
export default {

  name: 'PageHeader',
  components: { VueShowdown },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.pageheader {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: $bg-light;
  background-image: url('../assets/img/paper-texture.png');
  background-repeat: repeat-x;
  background-size: 100vh;
  overflow-y: hidden;
  .title {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .description {
    max-width: 690px;
    text-align: left;
    padding: 10px
  }
  .ripped-edge {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
