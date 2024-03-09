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

<style>
body {
  margin: 0;
}
</style>
