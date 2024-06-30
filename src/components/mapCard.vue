<template>
  <router-link :to="link">
    <div class="card-wrapper">
      <h3>{{ header }}</h3>
      <img :src="resolve_img_url(imageSrc)" :alt="imageAlt" />
      <p>{{ description }}</p>
      <MapButton
        v-if="button"
        title="Go to map"
        :redVariant="false"
      ></MapButton>
    </div>
  </router-link>
</template>

<script>
import MapButton from '@/components/button.vue';
export default {
  name: 'MapCard',
  props: {
    header: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  components: { MapButton },
  data() {
    return {};
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        '../assets/img/mapMini/',
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
  cursor: pointer;
  margin-bottom: 100px;
  p {
    margin: 35px 0;
    text-align: center;
    min-height: 50px;
  }
  img {
    margin-top: 55px;
    max-height: 300px;
    max-width: 470px;
    min-width: 28vw;

    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }
}
</style>
