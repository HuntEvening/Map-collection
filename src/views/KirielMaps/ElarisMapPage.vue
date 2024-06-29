<template>
  <div class="Elaris">
    <PageHeader
      title="Elaris"
    ></PageHeader>
    <ElarisMap></ElarisMap>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import ElarisMap from '@/components/KirielMaps/ElarisMap.vue';

export default {
  name: 'ElarisPage',
  components: { PageHeader, ElarisMap },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
