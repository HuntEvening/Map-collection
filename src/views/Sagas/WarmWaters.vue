<template>
  <div>
    <StoryArea
      fileName="Warm-waters.md"
      :bgTheme="false"
      storyType="Backstory"
      title="Warm Waters"
      description="BACKSTORY FOR ALERIA - PART 1"
      world="KROZLYIS - FLAMEROCK"
      imageSrc="nikjas-adam-harmony-ue5-by-nikjas-adam-6.webp"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'WarmWaters',
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
