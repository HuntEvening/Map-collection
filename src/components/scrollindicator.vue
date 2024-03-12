<template>
  <div v-if="!horizontal" class="vertical">
    <div class="progress-container">
      <div class="progress-bar" id="myBar">
        <img src="../assets/img/Star-1.svg" id="star" />
      </div>
    </div>
  </div>
  <div class="vertical-mobile">
    <div class="progress-container">
      <div class="progress-bar" id="horzBar">
        <img src="../assets/img/Star-1.svg" id="starHorizontal" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressIndicator',
  data() {
    return {};
  },
  props: {
    horizontal: {
      type: Boolean,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleHorzScroll);
    window.addEventListener('scroll', this.handleVertScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleHorzScroll);
    window.removeEventListener('scroll', this.handleVertScroll);
  },
  methods: {
    handleHorzScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById('horzBar').style.width = scrolled + '%';
      document.getElementById('starHorizontal').style.left =
        scrolled * 3.9 + 'px';
    },
    handleVertScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById('myBar').style.height = scrolled + '%';
      document.getElementById('star').style.top = scrolled - 8 + '%';
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';

.vertical {
  display: flex;
  align-items: center;
  position: fixed;
  height: 100vh;
  z-index: 1000;
  .progress-container {
    position: fixed;
    margin: 30px;
    left: 0;
    height: 200px;
    width: 3px;
    background: $text-mid;
  }

  .progress-bar {
    width: 3px;
    // background: $hl-red-2;
    background: $text-mid;
    height: 0%;
    img {
      position: absolute;
      left: -12px;
    }
  }
}

.vertical-mobile {
  display: none;
}
@media (max-width: 425px) {
  .vertical {
    display: none;
  }
  .vertical-mobile {
    display: flex;
    justify-content: center;
    background-color: $bg-dark;
    height: 6vh;
    position: fixed;
    bottom: 0;
    width: 100%;
    /* The progress container (grey background) */
    .progress-container {
      margin: 22px;
      height: 3px;
      width: 90vw;
      background: $text-mid;
    }

    /* The progress bar (scroll indicator) */
    .progress-bar {
      background: $text-mid;
      height: 3px;
      img {
        position: absolute;
        bottom: 8px;
        margin-left: 6px;
      }
    }
  }
}
</style>
