<template>
  <div>
    <StoryArea
      file-name="Just-this-last-job.md"
      :bgTheme="false"
      storyType="Backstory"
      title="Just this last job"
      description="PART 2 OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="sergey-demidov-astral-island.jpg"
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
