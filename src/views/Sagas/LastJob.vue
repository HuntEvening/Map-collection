<template>
  <VueShowdown
    :markdown="mdFile"
    flavor="github"
    :options="{ emoji: true }"
  />
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'LastJob',
  components: { VueShowdown },
  data() {
    return {
      mdFile: '',
    };
  },
  created() {
    var client = new XMLHttpRequest();
    client.open('GET', 'assets/sagas/Just-this-last-job.md');
    let self = this;
    client.onreadystatechange = function () {
      self.mdFile = client.responseText;
    };
    client.send();
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
</style>
