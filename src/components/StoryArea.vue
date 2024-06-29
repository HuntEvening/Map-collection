<template>
  <div :class="[button, bgTheme ? 'bg-theme' : 'image-theme']">
    <div class="text-area">
      <h4>{{ storyType }}</h4>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ world }}</p>
    </div>
    <div v-if="imageSrc" class="img-overlay"></div>
    <img v-if="imageSrc" :src="resolve_img_url(imageSrc)" />
  </div>
  <div class="md-text-area">
    <div class="title">
      <h4 class="white">
        {{ title }}
      </h4>
      <p>
        {{ description }}
      </p>
      <p>
        {{ world }}
      </p>
    </div>
    <div class="markdown-container">
      <VueShowdown :markdown="mdFile" flavor="github" />
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'StoryArea',
  components: { VueShowdown },
  data() {
    return {
      mdFile: '',
      // bgTheme: false,
      // description: 'PART 2 OF THE ELITHANA STORY',
      // imageSrc: 'sergey-demidov-astral-island.jpg',
      // storyType: 'Backstory',
      // title: 'Just this last job',
    };
  },
  props: {
    fileName: {
      type: String,
      required: true,
    },
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
  },
  created() {
    var client = new XMLHttpRequest();
    client.open('GET', `assets/sagas/${this.fileName}`);
    let self = this;
    client.onreadystatechange = function () {
      self.mdFile = client.responseText;
    };
    client.send();
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

.title {
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
  font-size: 15px;
  position: sticky;
  top: 0px;
  font-weight: 600;
  padding: 20px 5vw 10px 5vw;
  p {
    color: $text-mid;
  }
}
.md-text-area {
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
}

.image-theme {
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  h4 {
    color: $text-light;
    font-weight: 400;
  }
  h1 {
    color: $text-light;
    font-weight: 400;
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
  width: 100%;
  z-index: 50;
}
.img-overlay {
  outline: 3px solid $text-mid;
  outline-offset: -3px;
  width: 100%;
  background-color: $text-dark;
  opacity: 70%;
  position: absolute;
  height: 450px;
  object-fit: cover;
  z-index: 55;
}

.bg-theme {
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
  }
}
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
}

@media (max-width: 425px) {
  .title {
    padding: 20px 20vw 10px 5vw;
  }
}
</style>
