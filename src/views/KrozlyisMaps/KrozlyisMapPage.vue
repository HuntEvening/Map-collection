<template>
  <div class="Krozlyis">
    <PageHeader
      title="Krozlyis"
    ></PageHeader>
    <KrozlyisMapPage></KrozlyisMapPage>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import KrozlyisMapPage from '@/components/KrozlyisMaps/KrozlyisMap.vue';

export default {
  name: 'KrozlyisPage',
  components: { PageHeader, KrozlyisMapPage },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
