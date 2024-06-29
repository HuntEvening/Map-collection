<template>
  <div class="Noctura">
    <PageHeader
      title="Noctura"
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
