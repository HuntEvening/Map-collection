<template>
  <div class="CharacterBanner">
    <div class="char-names">
      <h1>{{ name }}</h1>
      <h4>{{ subheader }}</h4>
    </div>
    <div class="char-info-wrapper">
      <!-- left -->
      <div class="outer">
        <div class="inner">
          <i class="top left"></i>
          <div class="content-left">
            <p>Race: {{ race }}</p>
            <p>Age: {{ age }}</p>
            <p>Gender: {{ gender }}</p>
            <p>Class: {{ dndclass }}</p>
          </div>
        </div>
      </div>
      <!-- middle -->
      <div class="char-compass">
        <img
          src="@/assets/img/compass.png"
          :style="{ objectPosition: objectPosition }"
        />
        <div class="char-img">
          <img
            :src="resolve_img_url(imageSrc)"
            :style="{ objectPosition: objectPosition }"
          />
        </div>
      </div>
      <!-- right -->
      <div class="outer">
        <div class="inner">
          <i class="top right"></i>
          <div class="content-right">
            <p>World: {{ world }}</p>
            <p>System: {{ system }}</p>
      
          </div>
        </div>
      </div>
    </div>
    <div class="quote-box">
      <p>{{ quote }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBanner',
  components: {},
  data() {
    return {
      imageSrc: 'aleriaMini.png',
    };
  },
  props: {
    name: {
      type: String,
    },
    subheader: {
      type: String,
    },
    race: {
      type: String,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    dndclass: {
      type: String,
    },
    world: {
      type: String,
    },
    system: {
      type: String,
    },
    quote: {
      type: String,
    },
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

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.CharacterBanner {
  height: 100vh;
  background-color: $bg-light;
  background-image: url('../assets/img/paper-texture.png');
  background-repeat: repeat-x;
  background-size: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.char-names{
  margin-bottom: 180px;
}
.char-info-wrapper {
  // height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.char-compass {
  position: absolute;
  // top: 130px;
  margin-bottom: 203px;

  img {
    z-index: 100;
    height: 300px;
  }
  // background-image: url('../assets/img/compass.png');
  height: 300px;
  width: 300px;
  background-size: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.char-img {
  position: absolute;
  // background-image: url('../assets/img/charAssets/Aleria.jpg');
  img {
    margin-top: 5px;
    z-index: 10;
    height: 165px;
    width: 165px;
    border-radius: 50%;
    object-fit: cover;
    object-position: left;
  }
}

.quote-box {
  min-width: 560px;
  background-color: $bg-dark;
  padding: 47px 121px;
  border: 3px solid $text-mid;
  // margin-top: 30px;
}

.outer {
  overflow: hidden;
  width: 400px;
  margin: 5px;
}
.inner {
  border: 3px solid $text-mid;
}
.inner i {
  width: 300px;
  height: 300px;
  border: 3px solid $text-mid;
  border-radius: 50%;
  background-color: $bg-light;
  background-image: url('../assets/img/paper-texture.png');
  background-repeat: repeat-x;
  background-size: 100vh;
}
.inner .top {
  margin-top: -150px;
}

.inner .right {
  float: left;
  margin-left: -150px;
}
.inner .left {
  float: right;
  margin-right: -150px;
}
.content-left {
  height: 140px;
  min-height: 80px;
  background-color: $bg-dark;
  text-align: left;
  padding: 30px;
  p {
    margin: 0 0 10px 0 !important;
  }
}
.content-right {
  height: 140px;
  min-height: 80px;
  background-color: $bg-dark;
  text-align: right;
  padding: 30px;
  p {
    margin: 0 0 10px 0 !important;
  }
}
</style>
