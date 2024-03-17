<template>
  <div class="Noctura">
    <PageHeader
      title="Noctura"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <NocturaMap></NocturaMap>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import NocturaMap from '@/components/NocturaMaps/NocturaMap.vue';

export default {
  name: 'NocturaPage',
  components: { PageHeader, NocturaMap },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
