<template>
  <div class="HH">
    <PageHeader
      title="Hutching's Hollow - 4883"
    ></PageHeader>
    <HH4883Map></HH4883Map>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import HH4883Map from '@/components/KirielMaps/HH4883Map.vue';

export default {
  name: 'HH4883Page',
  components: { PageHeader, HH4883Map },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
