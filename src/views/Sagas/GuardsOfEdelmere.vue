<template>
  <div>
    <StoryArea
      fileName="Guards-of-Edelmere.md"
      :bgTheme="false"
      storyType="Story"
      title="Guards of Edelmere"
      description="PART '22' OF THE ELITHANA STORY"
      world="KIRIEL - ADRELA"
      imageSrc="eddie-mendoza-chateau.webp"
      :focusDate="{ year: 33237, timespan: 10, day: 7 }"
      linkText="7th of Symas 33237"
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
