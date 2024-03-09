<template>
  <div class="Krozlyis">
    <PageHeader
      title="Krozlyis"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <KrozlyisMap></KrozlyisMap>
  </div>
</template>

<script>
import PageHeader from '../../components/pageheader.vue';
import KrozlyisMap from '../../components/KrozlyisMaps/KrozlyisMap.vue';

export default {
  name: 'KrozlyisPage',
  components: { PageHeader, KrozlyisMap },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
</style>
