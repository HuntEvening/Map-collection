<template>
  <div class="home">
    <PageHeader
      title="kiriel"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <div class="map-selection">
      <h1 class="light">Continent Maps</h1>
      <div class="card-group">
        <MapCard
          header="Elaris"
          imageSrc="ElarisMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/elaris-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Yeren'gar"
          imageSrc="YerenGarMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/yerengar-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Adrela & Lereon - WIP"
          subtitle="WIP"
          imageSrc="AnLMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/AdrelaLereon-map"
          button="true"
        ></MapCard>
      </div>
      <h1 class="light">City Maps</h1>
      <div class="card-group">
        <MapCard
          header="Hutching's Hollow - 4710"
          imageSrc="HollowMini4710.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/hutchings4710-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Hutching's Hollow - 4883"
          imageSrc="HollowMini4883.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/hutchings4883-map"
          button="true"
        ></MapCard>
      </div>
      <h1 class="light">Characters</h1>
      <div class="char-card-group">
        <CharacterCard
          header="Elithana 'Sunwalker'"
          imageSrc="eli.png"
          link="/elithana"
        ></CharacterCard>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/pageheader.vue';
import MapCard from '../components/mapCard.vue';
import CharacterCard from '../components/characterCard.vue';
import "leaflet/dist/leaflet.css";

export default {
  name: 'KirielWorldPage',
  components: { PageHeader, MapCard, CharacterCard },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';

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
    flex-direction: column;
  }
}
</style>
