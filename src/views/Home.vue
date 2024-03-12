<template>
  <div class="home">
    <div class="image-hero">
      <div class="text-group">
        <h4>Maps by</h4>
        <div class="heading">
          <h1>Hunt</h1>
          <h1>Evening</h1>
        </div>
      </div>
      <img class="pointer" src="../assets/img/pointer.png" />
      <img class="ripped-edge" src="../assets/img/ripped2.png" />
    </div>
    <div class="map-selection">
      <h1 class="light">Worlds</h1>
      <div class="card-group">
        <MapCard
          header="Krozlyis"
          imageSrc="KrozlyisMini.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/krozlyis"
        ></MapCard>
        <MapCard
          header="Kiriel"
          imageSrc="ElarisMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/kiriel"
        ></MapCard>
        <MapCard
          header="Noctura"
          imageSrc="NocturaMini.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
          link="/noctura"
        ></MapCard>
      </div>
    </div>
  </div>
</template>

<script>
import MapCard from '../components/mapCard.vue';
export default {
  name: 'HomePage',
  components: { MapCard },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';

.image-hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;

  background-color: $bg-light;
  background-image: url('../assets/img/paper-texturelines2.png');
  background-repeat: repeat-x;
  background-position: center;
  background-size: 100vh;
  background-attachment: fixed;
  overflow-y: hidden;
  .text-group {
    margin: 25vh 0 25vh 0;
    .heading {
      display: flex;
    }
  }

  .ripped-edge {
    width: 100%;
    height: 200px;
    // position: absolute;
    object-fit: cover;
    bottom: 0;
    left: 0;
  }
  .pointer {
    // position: absolute;
    bottom: 160px;
    left: 49vw;
    mix-blend-mode: darken;
  }
}
.map-selection {
  // height: 100vh;
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
    column-gap: 60px;
    margin: 100px 5vw 0 5vw;
  }
}

@media (max-width: 768px) {
  .card-group {
    columns: 1 !important;
    column-gap: 60px;
  }
}
</style>
