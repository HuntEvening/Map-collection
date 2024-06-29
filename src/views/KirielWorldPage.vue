<template>
  <div class="home">
    <PageHeader
      title="kiriel"
      description="'A 'small' passion project of mine to expore different styles of map making and at the same time be able to write compelling storys within the world. Each map represent a continent in the World Elaris and they all started from a key word - Hunt'"
    ></PageHeader>
    <div class="map-selection">
      <h1 class="light">Continent Maps</h1>
      <div class="card-group">
        <MapCard
          header="Elaris"
          imageSrc="ElarisMini.png"
          description="'Fire'"
          link="/elaris-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Yeren'gar"
          imageSrc="YerenGarMini.png"
          description="'Earth'"
          link="/yerengar-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Adrela & Lereon"
          subtitle="WIP"
          imageSrc="AnLMini.png"
          description="'Light & Shadow'"
          link="/AdrelaLereon-map"
          button="true"
        ></MapCard>
      </div>
      <h1 class="light">City Maps</h1>
      <div class="card-group">
        <MapCard
          header="Hutching's Hollow - 4710"
          imageSrc="HollowMini4710.png"
          description="One of my campaign made the choice to switch from D&D to pathfinder and such our characters got sucked though a painting and spat out in a new world, there to meet them was the town of hutching's hollow"
          link="/hutchings4710-map"
          button="true"
        ></MapCard>
        <MapCard
          header="Hutching's Hollow - 4883"
          imageSrc="HollowMini4883.png"
          description="Plans in the works to continue our campaign but set many years later. Map is currently 'work in progress'"
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
import PageHeader from '@/components/pageheader.vue';
import MapCard from '@/components/mapCard.vue';
import CharacterCard from '@/components/characterCard.vue';
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
    grid-template-columns: repeat(3, 1fr);
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
