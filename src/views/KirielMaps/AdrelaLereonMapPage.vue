<template>
  <div class="AdrelaLereon">
    <PageHeader
      title="Adrela & Lereon"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <AdrelaLereonMap></AdrelaLereonMap>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import AdrelaLereonMap from '@/components/KirielMaps/AdrelaLereonMap.vue';

export default {
  name: 'AdrelaLereonPage',
  components: { PageHeader, AdrelaLereonMap },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
