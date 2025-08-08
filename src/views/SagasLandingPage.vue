<template>
  <div class="sagas">
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Surface job"
      description="PART '1' OF THE ELITHANA STORY"
      world="KIRIEL - UNDERDARK"
      imageSrc="muun-bgk010-f-copy.webp"
      link="/surface-job"
      date="16th of Vyn 33093"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Just this last job"
      description="PART '13' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="sergey-demidov-astral-island.webp"
      link="/last-job"
      date="28th of Etfrin  33200"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Aftermath"
      description="PART '14' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="raphael-lacoste-mushies-final-net.webp"
      link="/aftermath"
      date="10th of Gyllip 33200"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Who's there"
      description="PART '15' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="tomas-matous-castle-dark.webp"
      link="/Whos-there"
      date="24th of Gyllip 33200"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Guards of Edelmere"
      description="PART '22' OF THE ELITHANA STORY"
      world="KIRIEL - ADRELA"
      imageSrc="eddie-mendoza-chateau.webp"
      link="/Guards-of-Edelmere"
      date="7th of Symas 33237"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Backstory"
      title="The battle of Memento Mori"
      description="BACKSTORY FOR FELEN COREWOOD"
      world="KROZLYIS - MEMENTO MORI"
      imageSrc="jaromir-hrivnac-first-arwork-sketch-04.webp"
      link="/Memento-Mori"
    />
  </div>
</template>

<script>
import StoryBanner from '@/components/storyBanner.vue';

export default {
  name: 'SagasLandingPage',
  components: { StoryBanner },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.sagas {
  background-image: url('../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
}
</style>
