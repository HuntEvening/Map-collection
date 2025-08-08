<template>
  <div>
    <div class="single-date-container">
      <a href="#" class="single-date-link" @click.prevent="toggle">
        {{ linkText }}
      </a>
    </div>

    <teleport to="body">
      <div v-if="open" class="modal-overlay" @click.self="close" tabindex="-1">
        <div class="modal-content" role="dialog" aria-modal="true" :aria-label="linkText">
          <header class="modal-header">
            <RouterLink to="/kirellian-calendar" class="full-calendar-link" @click="close">
              View full calendar
            </RouterLink>
            <button class="close-btn" @click="close" aria-label="Close">×</button>
          </header>

          <KirellianCalendar :focusDate="focusDate" />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import KirellianCalendar from '@/components/calendar.vue';

export default {
  name: 'DateLinkModal',
  components: { KirellianCalendar, RouterLink },
  props: {
    focusDate: { type: Object, required: true }, // { year, timespan, day }
    linkText: { type: String, required: true }, // text to display on the link and modal title
  },
  setup() {
    const open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };
    const close = () => {
      open.value = false;
    };

    return { open, toggle, close };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.single-date-link {
  color: $hl-blue-1;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  z-index: 1000;
}
.modal-content {
  background: #2f2e2c;
  border: 1px solid #8a7d5e;
  border-radius: 8px;
  padding: 1rem;
  width: min(445px, 95vw);
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.modal-title {
  margin: 0;
}
.close-btn {
  background: transparent;
  border: 1px solid #8a7d5e;
  color: #e8e0c8;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.full-calendar-link {
  color: $hl-blue-1;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-size: $paragraph-size-5;

  &:hover {
    color: lighten($hl-blue-1, 10%);
  }
}

</style>
