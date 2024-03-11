<template>
  <div class="nav-placement">
    <NavBar></NavBar>
    <!--         <nav>
      <router-link to="/">Home</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/nav.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

/* marker styling */
.marker-image {
  max-width: 400px;
}
.leaflet-popup-content {
  width: auto !important;
}
/* //popup color */
.leaflet-popup-content-wrapper {
  background-color: #080808 !important;
  a {
    font-size: 16px;
  }
}
.leaflet-popup-content-wrapper a {
  padding-top: 2px;
  color: white !important;
}

.leaflet-popup-tip {
  background-color: #080808 !important;
}
</style>
