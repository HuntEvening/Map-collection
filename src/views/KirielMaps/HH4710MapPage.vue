<template>
  <div class="HH">
    <PageHeader
      title="Hutching's Hollow - 4710"
    ></PageHeader>
    <HH4710Map></HH4710Map>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import HH4710Map from '@/components/KirielMaps/HH4710Map.vue';

export default {
  name: 'HH4710Page',
  components: { PageHeader, HH4710Map },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
