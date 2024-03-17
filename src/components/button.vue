<template>
  <div :class="[button, redVariant ? 'red-theme' : 'white-theme']">
    <span class="mas">{{ title }}</span>
    <button>{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: 'MapButton',
  props: {
    title: {
      type: String,
    },
    redVariant: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

@mixin button($bcolor, $url, $x1, $y1, $bor, $col) {
  background: $bcolor;
  -webkit-mask: url($url);
  mask: url($url);
  -webkit-mask-size: $x1 $y1;
  mask-size: $x1 $y1;
  border: $bor;
  color: $col;
}

.white-theme {
  margin: 30px 0 30px 0;
  position: relative;
  overflow: hidden;
  button {
    font-family: $paragraph-font;
    font-size: $paragraph-size-2;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 50px;
    width: 200px;
    transition: 0.5s;

    @include button(
      $text-light,
      'https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png',
      3000%,
      100%,
      none,
      $text-dark
    );
    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(29) forwards;
    animation: ani2 0.7s steps(29) forwards;

    &:hover {
      -webkit-animation: ani 0.7s steps(29) forwards;
      animation: ani 0.7s steps(29) forwards;
    }
  }
  .mas {
    background: transparent;
    border: 1px solid $text-light;
    font-family: $paragraph-font;
    font-size: $paragraph-size-2;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 48px;
    width: 198px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    color: $text-light;
  }
}
.red-theme {
  margin: 30px 0 30px 0;
  position: relative;
  overflow: hidden;
  button {
    font-family: $paragraph-font;
    font-size: $paragraph-size-2;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 50px;
    width: 200px;
    transition: 0.5s;

    @include button(
      $hl-red-1,
      'https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png',
      3000%,
      100%,
      none,
      $text-light
    );
    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(29) forwards;
    animation: ani2 0.7s steps(29) forwards;

    &:hover {
      -webkit-animation: ani 0.7s steps(29) forwards;
      animation: ani 0.7s steps(29) forwards;
    }
  }
  .mas {
    background: $hl-red-2;
    border: 2px solid $hl-red-2;
    font-family: $paragraph-font;
    font-size: $paragraph-size-2;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 47px;
    width: 197px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    color: $text-light;
  }
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

a {
  color: #00ff95;
}
</style>
