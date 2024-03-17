<template>
  <div class="home">
    <PageHeader
      title="Noctura"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <div class="map-selection">
      <h1 class="light">Maps</h1>

      <div class="card-group">
        <MapCard
          header="Noctura"
          imageSrc="NocturaMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/noctura-map"
          button="true"
        ></MapCard>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import MapCard from '@/components/mapCard.vue';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'NocturaWorldPage',
  components: { PageHeader, MapCard },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.map-selection {
  background-image: url('../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  .card-group {
    columns: 3;
    column-gap: 2.5vw;
    margin: 100px 5vw 100px 5vw;
    display: flex;
  }
  .char-card-group {
    margin: 100px 5vw 100px 5vw;
    display: flex;
  }
}
@media (max-width: 768px) {
  .card-group {
    columns: 1 !important;
    column-gap: 60px;
  }
}
</style>
