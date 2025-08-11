<template>
  <div>
    <StoryArea
      fileName="Corewood-missing.md"
      :bgTheme="true"
      storyType="Backstory"
      title="Report - Corewood"
      description="BACKSTORY FOR FELEN COREWOOD - PART 2"
      world="KROZLYIS - Blazeport"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'CorewoodMissing',
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
