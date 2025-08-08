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
      :focusDate="{ year: 33200, timespan: 6, day: 24 }"
      linkText="24th of Gyllip 33200"
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
