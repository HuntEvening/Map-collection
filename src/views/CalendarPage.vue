<template>
  <div class="calendar">
    <!--     <KirellianCalendar :focusDate="{ year: 33017, timespan: 8, day: 1 }" />
 -->
    <KirellianCalendar />
  </div>
</template>

<script>
import KirellianCalendar from '@/components/calendar.vue';
export default {
  name: 'CalendarPage',
  components: { KirellianCalendar },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.calendar {
  // height: 100vh;
  background-image: url('../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  border-top: 3px solid #131b1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
}
</style>
