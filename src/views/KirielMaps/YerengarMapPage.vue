<template>
  <div class="Yeren'Gar">
    <PageHeader
      title="Yeren'Gar"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <YerengarMap></YerengarMap>
  </div>
</template>

<script>
import PageHeader from '../../components/pageheader.vue';
import YerengarMap from '../../components/KirielMaps/YerengarMap.vue';

export default {
  name: 'YerenGarPage',
  components: { PageHeader, YerengarMap },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
</style>
