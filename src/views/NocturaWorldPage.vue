<template>
  <div class="home">
    <PageHeader
      title="Noctura"
      description="Welcome to the word of Noctura!

A world where civilisation has been long destroyed by the darkness that consumed it.

Seven days of light and seven days of night. A night that corrupts and destroys anything that is too slow to escape it.

With the help of the worlds most powerful spellcasters and artifacts, most of Noctura's population had abandoned it and made their way to safer planes.

It is now 300 years after the great exodus of Noctura and the remaining population have taken refuge in underground settlements that pray for their doors to hold out each cycle.

Rumour has it that there are cities the size of mountains that roam the land outside, never having to fear the darkness, powered by the crystals found deep inside the mines these underground settlements had repurposed as their homes.

Perhaps you will found the next paradise for your fellow survivors?
Maybe you will uncover the truth behind the deadly darkness?
Or maybe you'll just survive long enough to die peacefully..."
></PageHeader>
    <div class="map-selection">
      <h1 class="light">Maps</h1>

      <div class="card-group">
        <MapCard
          header="Noctura"
          imageSrc="NocturaMini.png"
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
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2.5vw;
    margin: 100px 5vw 0 5vw;
  }
  .char-card-group {
    margin: 100px 5vw 100px 5vw;
    display: flex;
  }
}
@media (max-width: 768px) {
  .card-group {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 2.5vw;
  }
}
</style>
