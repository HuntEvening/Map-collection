<template>
  <div>
    <StoryArea
      file-name="Just-this-last-job.md"
      :bgTheme="false"
      storyType="Backstory"
      title="Just this last job"
      description="PART '13' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="sergey-demidov-astral-island.webp"
      :focusDate="{ year: 33200, timespan: 5, day: 28 }"
      linkText="28th of Etfrin  33200"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'LastJob',
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
