<template>
  <div class="HH">
    <PageHeader
      title="Hutching's Hollow - 4883"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <HH4883Map></HH4883Map>
  </div>
</template>

<script>
import PageHeader from '../../components/pageheader.vue';
import HH4883Map from '../../components/KirielMaps/HH4883Map.vue';

export default {
  name: 'HH4883Page',
  components: { PageHeader, HH4883Map },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
</style>
