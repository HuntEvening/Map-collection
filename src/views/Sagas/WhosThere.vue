<template>
  <div>
    <StoryArea
      fileName="Whos-there.md"
      :bgTheme="false"
      storyType="Story"
      title="Who's there?"
      description="PART '15' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="tomas-matous-castle-dark.webp"
      link="/whos-there"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'WhosThere',
  components: { StoryArea },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

</style>
