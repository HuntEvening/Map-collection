<template>
  <div>
    <StoryArea
      fileName="Guards-of-Edelmere.md"
      :bgTheme="false"
      storyType="Story"
      title="Guards of Edelmere"
      description="PART '22' OF THE ELITHANA STORY"
      world="KIRIEL - ADRELA"
      imageSrc="muun-bgk010-f-copy.jpg"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'GuardsOfEdelmere',
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
