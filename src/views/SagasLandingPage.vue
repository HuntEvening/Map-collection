<template>
  <div class="sagas">
<!--     <StoryBanner
      :bgTheme="true"
      storyType="Backstory"
      title="Unexpected appearance"
      description="PART 1 OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      link="/unexpected-appearance"
    /> -->
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Just this last job"
      description="PART '13' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="sergey-demidov-astral-island.jpg"
      link="/last-job"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Aftermath"
      description="PART '14' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="raphael-lacoste-mushies-final-net.jpg"
      link="/aftermath"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Who's there"
      description="PART '15' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="tomas-matous-castle-dark.jpg"
      link="/Whos-there"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Story"
      title="Guards of Edelmere"
      description="PART '22' OF THE ELITHANA STORY"
      world="KIRIEL - ADRELA"
      imageSrc="eddie-mendoza-chateau.jpg"
      link="/Guards-of-Edelmere"
    />

<!--     <StoryBanner
      :bgTheme="true"
      storyType="Story"
      title="Surface job"
      description="Memory of the past"
      world="KIRIEL - ADRELA"
      link="/surface-job"
    /> -->
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
