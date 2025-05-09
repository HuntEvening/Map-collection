<template>
  <div class="Krozlyis">
    <PageHeader title="Krozlyis"></PageHeader>
    <KrozlyisMapPage2 />
    <KrozlyisMapPage />
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import KrozlyisMapPage from '@/components/KrozlyisMaps/KrozlyisMap.vue';
import KrozlyisMapPage2 from '@/components/KrozlyisMaps/KrozlyisMap-v2.vue';

export default {
  name: 'KrozlyisPage',
  components: { PageHeader, KrozlyisMapPage, KrozlyisMapPage2 },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
