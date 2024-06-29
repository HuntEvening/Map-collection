<template>
  <div>
    <CharacterBanner
      name="Aleria Taran"
      subheader=""
      race="Tiefling"
      age="20"
      gender="Female"
      dndclass="Wild Magic Sorcerer"
      quote='"AAAAAAAND DETONATE!"'
      world="Krozlyis"
      system="D&D"
    ></CharacterBanner>
  </div>
</template>

<script>
import CharacterBanner from '@/components/characterBanner.vue';

export default {
  name: 'AdrelaLereonPage',
  components: { CharacterBanner },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
