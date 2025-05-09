<template>
  <div class="home">
    <PageHeader title="Krozlyis"></PageHeader>
    <div class="map-selection">
      <h1 class="light">Maps</h1>

      <div class="card-group">
        <MapCard
          header="Krozlyis"
          imageSrc="KrozlyisMini.jpg"
          link="/krozlyis-map"
          button="true"
        ></MapCard>
      </div>
      <h1 class="light">Characters</h1>
      <div class="char-card-group">
        <CharacterCard
          header="Aleria Taran"
          imageSrc="Aleria.webp"
          link="/aleria"
          objectPosition="left"
        ></CharacterCard>
        <CharacterCard
          header="Ahraan-Lah"
          imageSrc="ahraanglassart.webp"
          link="/ahraan"
          objectPosition="left"
        ></CharacterCard>
        <CharacterCard
          header="Sarah"
          imageSrc="sarahglassart.webp"
          link="/sarah"
          objectPosition="left"
        ></CharacterCard>
        <CharacterCard
          header="Morde"
          imageSrc="aceofhearts.webp"
          link="/morde"
          objectPosition="left"
        ></CharacterCard>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/pageheader.vue';
import MapCard from '@/components/mapCard.vue';
import CharacterCard from '@/components/characterCard.vue';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'KirielWorldPage',
  components: { PageHeader, MapCard, CharacterCard },
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
    flex-wrap: wrap;
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
