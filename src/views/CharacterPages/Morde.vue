<template>
  <div>
<!--     <CharacterBanner
      name="Ahraan-Lah"
      subheader=""
      race="Half dragon"
      age="60?"
      gender="Male"
      dndclass="Hemomancy Sorcerer"
      quote='"Is Ahraan just a pigeon?" - Luca'
      world="Krozlyis"
      system="D&D"
      imageSrc="ahraanglassart.webp"
      objectPosition="top"
    ></CharacterBanner> -->
    <div class="art-selection">
      <h1 class="light">Art gallery</h1>
      <div class="art-area">
        <div>
          <img
            class="art-img"
            src="../../assets/img/charAssets/aceofhearts.webp"
          />
          <figcaption>Ace of hearts playing card from Morde, By HuntEvening</figcaption>
        </div>
        <div>
          <img
            class="art-img"
            src="../../assets/img/charAssets/aceofcloves.webp"
          />
          <figcaption>Ace of cloves playing card from Morde, By HuntEvening</figcaption>
        </div>
        <div>
          <img
            class="art-img"
            src="../../assets/img/charAssets/aceofdiamonds.webp"
          />
          <figcaption>Ace of diamonds playing card from Morde, By HuntEvening</figcaption>
        </div>
        <div>
          <img
            class="art-img"
            src="../../assets/img/charAssets/aceofspades.webp"
          />
          <figcaption>Ace of spades playing card from Morde, By HuntEvening</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import CharacterBanner from '@/components/characterBanner.vue'; */

export default {
  name: 'MordePage',
  components: { /* CharacterBanner */ },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.art-selection {
  // height: 100vh;
  background-image: url('../../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  .art-area {
    margin: 5vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5vw;
  }
  .art-img {
    width: 45vw;
  }
}
@media (max-width: 768px) {
  .art-area {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 2.5vw;
  }
  .art-img {
    width: 80vw !important;
  }
}
</style>
