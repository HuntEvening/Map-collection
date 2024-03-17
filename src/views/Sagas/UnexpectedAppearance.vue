<template>
  <div>
    <StoryArea fileName="Unexpected-appearance.md"
    :bgTheme="true"
        storyType="Backstory"
        title="Unexpected appearance"
        description="PART 1 OF THE ELITHANA STORY"
        link="/unexpected-appearance"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'UnexpectedAppearance',
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
