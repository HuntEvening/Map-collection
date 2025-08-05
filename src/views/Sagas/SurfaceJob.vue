<template>
  <div>
    <StoryArea
      fileName="Surface-job.md"
      :bgTheme="false"
      storyType="Story"
      title="Surface job"
      description="PART '1' OF THE ELITHANA STORY"
      world="KIRIEL - UNDERDARK"
      imageSrc="muun-bgk010-f-copy.webp"
    ></StoryArea>
  </div>
</template>
<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'SurfaceJob',
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
