<template>
  <div class="Yeren'Gar">
    <PageHeader
      title="Yeren'Gar"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu orci sed leo dignissim porta nec efficitur diam. Cras venenatis est faucibus ex dapibus, eget ultrices odio tempor. Phasellus et maximus diam."
    ></PageHeader>
    <div class="story-selection">
      <YerengarMap></YerengarMap>
      <StoryBanner
        :bgTheme="true"
        storyType="Backstory"
        title="Unexpected appearance"
        description="PART 1 OF THE ELITHANA STORY"
        link="/unexpected-appearance"
      />
      <StoryBanner
        :bgTheme="false"
        storyType="Backstory"
        title="Just this last job"
        description="PART 2 OF THE ELITHANA STORY"
        imageSrc="sergey-demidov-astral-island.jpg"
        link="/last-job"
      />
      <StoryBanner
        :bgTheme="false"
        storyType="Backstory"
        title="Aftermath"
        description="PART 3 OF THE ELITHANA STORY"
        imageSrc="raphael-lacoste-mushies-final-net.jpg"
        link="/aftermath"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/pageheader.vue';
import YerengarMap from '../../components/KirielMaps/YerengarMap.vue';
import StoryBanner from '../../components/storyBanner.vue';

export default {
  name: 'YerenGarPage',
  components: { PageHeader, YerengarMap, StoryBanner },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.story-selection {
  background-image: url('../../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
}
</style>
