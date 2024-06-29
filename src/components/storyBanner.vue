<template>
  <div>
    <router-link
      :to="link"
      :class="[button, bgTheme ? 'bg-theme' : 'image-theme']"
    >
      <div class="text-area">
        <h4>{{ storyType }}</h4>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p>{{ world }}</p>
        <Button
          title="Read story"
          :redVariant="bgTheme ? true : false"
        ></Button>
      </div>
      <div v-if="imageSrc" class="img-overlay"></div>
      <img v-if="imageSrc" :src="resolve_img_url(imageSrc)" />
    </router-link>
  </div>
</template>

<script>
import Button from './button.vue';
export default {
  name: 'StoryBanner',
  props: {
    storyType: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    world: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
    bgTheme: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      required: true,
      default: '',
    },
  },
  components: { Button },
  data() {
    return {};
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        '../assets/img/storyImages/',
        true,
        /\.png$|\.jpg$/
      );
      return images('./' + path);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
a {
  text-decoration: none;
}
.image-theme {
  margin: 55px 0px 55px 0px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid $text-mid;
  h4 {
    color: $text-light;
    font-weight: 400;
  }
  h1 {
    color: $text-light;
    font-weight: 400;
  }
  p {
    color: $text-light;
    font-weight: 400;
    margin: 5px;
  }
}
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
}
img {
  position: absolute;
  height: 450px;
  object-fit: cover;
  width: 98.5vw;
  z-index: 50;
}
.img-overlay {
  width: 98.5vw;
  background-color: $text-dark;
  opacity: 70%;
  position: absolute;
  height: 450px;
  object-fit: cover;
  z-index: 55;
}

.bg-theme {
  margin: 55px 0px 55px 0px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid $text-mid;
  background-color: $bg-light;
  background-image: url('../assets/img/paper-texturelines.png');
  background-repeat: repeat-x;
  background-position: center;
  background-size: 100vh;
  h4 {
    color: $text-dark;
    font-weight: 600;
  }
  h1 {
    color: $text-dark;
    font-weight: 600;
  }
  p {
    color: $text-dark;
    font-weight: 600;
    margin: 5px;
  }
}
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
}
</style>
