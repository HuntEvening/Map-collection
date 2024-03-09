<template>
  <router-link :to="link">
    <div class="card-wrapper">
      <h5>{{ header }}</h5>
      <img :src="resolve_img_url(imageSrc)" :alt="imageAlt" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    header: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        '../assets/img/charAssets/',
        false,
        /\.png$|\.jpg$/
      );
      return images('./' + path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/base.scss';

a {
  text-decoration: none;
}
.card-wrapper {
  margin: 30px;
  h5 {
    border-left: 3px solid $text-mid;
    border-right: 3px solid $text-mid;
    border-top: 3px solid $text-mid;
    height: 60px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    border: 3px solid $text-mid;
    height: 350px;
    width: 250px;
    object-fit: cover;
  }
}
</style>
