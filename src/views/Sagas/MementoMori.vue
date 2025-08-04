<template>
  <div>
    <StoryArea
      fileName="Memento-Mori.md"
      :bgTheme="false"
      storyType="Backstory"
      title="The battle of Memento Mori"
      description="BACKSTORY FOR FELEN COREWOOD"
      world="KROZLYIS - MEMENTO MORI"
      imageSrc="jaromir-hrivnac-first-arwork-sketch-04.jpg"
    ></StoryArea>
  </div>
</template>

<script>
import StoryArea from '@/components/StoryArea.vue';
export default {
  name: 'MementoMori',
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
