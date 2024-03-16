<template>
  <div>
    <header id="header">
      <nav class="nav">
        <button @click="openMenu()" class="toggle-menu">
          <img src="@/assets/img/naviconw.svg" />
        </button>
      </nav>
    </header>

    <div id="menu" :class="{ open: this.isOpen }">
      <div class="main-nav">
        <ol>
          <router-link to="/">
            <li @click="openMenu()">
              <h1 href="#">Maps</h1>
            </li>
          </router-link>
          <router-link to="/sagas">
            <li @click="openMenu()">
              <h1 href="#">Sagas</h1>
            </li>
          </router-link>
          <router-link to="/about">
            <li @click="openMenu()">
              <h1 href="#">About</h1>
            </li>
          </router-link>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/base.scss';

#menu {
  background: $bg-light;
  background-image: url('../assets/img/menubg.png');
  background-blend-mode: overlay;
  background-size: 800px 800px;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.7s ease-in-out;

  // For some sweet fadez
  visibility: hidden;
  width: 100%;
  z-index: $menu-zindex;

  &.open {
    opacity: 1;
    visibility: visible;

    @for $i from 1 through 10 {
      li:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }

    li {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: fadeInUp;
    }
  }

  ul {
    // &:hover {
    //   a {
    //     opacity: 0.5;
    //   }
    // }

    a {
      -webkit-transform: translateZ(0);
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

  .main-nav {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    ol {
      margin: 0;
      padding: 0;
    }
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */

    li::after {
      counter-increment: section; /* Increment the value of section counter by 1 */
      content: counter(
        section
      ); /* Display counter value in default style (decimal) */
      position: absolute;
      left: -30px;

      font-size: 14px;
      color: $text-dark;
      font-family: $paragraph-font;
    }
    a {
      color: $menu-color;
      display: block;
      font-size: $menu-font-size;
      font-weight: bold;
      // padding: 1rem 1rem;
      text-decoration: none;
      text-transform: uppercase;
    }

    li:before {
      content: '';
      background-color: transparent;
      height: 145px;
      width: 6px;
      display: block;
      margin-right: 30px;
      border: 1px solid $text-dark;
    }

    a.router-link-active {
      li:before {
        content: '';
        background-color: $hl-red-1;
        height: 145px;
        width: 6px;
        display: block;
        margin-right: 30px;
        border: 1px solid $text-dark;
      }
    }
  }
}

.toggle-menu {
  background-color: transparent;
  mix-blend-mode: difference;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  width: 70px;
  outline: none;
  padding: 0;
  margin: 5vw;
  right: 0;
  pointer-events: initial;
  position: fixed;
  vertical-align: middle;
  z-index: $hamburger-zindex;
  /* background-image: ;
 */
}

// Hamburger menu toggler stuff below

@media (min-width: 425px) {
  .toggle-menu {
    background-color: transparent;
    mix-blend-mode: difference;
    border: none;
    cursor: pointer;
    display: inline-block;
    height: 80px;
    width: 70px;
    outline: none;
    padding: 0;
    margin-top: 10px;
    margin-right: 100px;
    right: 0;
    pointer-events: initial;
    position: fixed;
    vertical-align: middle;
    z-index: $hamburger-zindex;
    /* background-image: ;
 */
  }
}
</style>
