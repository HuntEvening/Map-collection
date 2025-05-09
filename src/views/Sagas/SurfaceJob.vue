<template>
  <div>
    <StoryArea
      fileName="surface-job.md"
      :bgTheme="true"
      storyType="Story"
      title="Surface job"
      description="MEMORIES OF THE PAST"
      world="KIRIEL - ADRELA"
      link="/surface-job"
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
