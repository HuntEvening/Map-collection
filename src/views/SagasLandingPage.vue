<template>
  <div class="sagas">
    <StoryBanner
      :bgTheme="true"
      storyType="Backstory"
      title="Unexpected appearance"
      description="PART 1 OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      link="/unexpected-appearance"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Backstory"
      title="Just this last job"
      description="PART 2 OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="sergey-demidov-astral-island.jpg"
      link="/last-job"
    />
    <StoryBanner
      :bgTheme="false"
      storyType="Backstory"
      title="Aftermath"
      description="PART 3 OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="raphael-lacoste-mushies-final-net.jpg"
      link="/aftermath"
    />
    <StoryBanner
      :bgTheme="true"
      storyType="Story"
      title="Surface job"
      description="Memory of the past"
      world="KIRIEL - ADRELA"
      link="/surface-job"
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
