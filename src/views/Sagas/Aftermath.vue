<template>
  <div>
    <StoryArea
      fileName="Aftermath.md"
      :bgTheme="false"
      storyType="Backstory"
      title="Aftermath"
      description="PART '14' OF THE ELITHANA STORY"
      world="KIRIEL - YEREN'GAR"
      imageSrc="raphael-lacoste-mushies-final-net.webp"
      :focusDate="{ year: 33200, timespan: 6, day: 10 }"
      linkText="10th of Gyllip 33200"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'AfterMath',
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
