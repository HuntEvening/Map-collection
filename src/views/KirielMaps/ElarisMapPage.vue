<template>
  <div class="Elaris">
    <PageHeader
      title="Elaris"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
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
