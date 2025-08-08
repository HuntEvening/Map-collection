<template>
  <div class="calendar">
    <!-- Year display (no buttons when focusDate is set) -->
    <div class="year-nav">
      <button v-if="!focusDate" @click="changeYear(-1)">◀</button>
      <h3>Year {{ displayedYear }}</h3>
      <button v-if="!focusDate" @click="changeYear(1)">▶</button>
    </div>

    <!-- Date picker: only visible in full-year view -->
    <div v-if="!focusDate" class="date-picker">
      <label class="sr-only" for="dp-year">Year</label>
      <input
        id="dp-year"
        class="dp-input"
        type="text"
        v-model.trim="pickYearInput"
        @keydown.enter.prevent="goToPickedDate"
        placeholder="Year"
      />

      <label class="sr-only" for="dp-month">Month</label>
      <select id="dp-month" class="dp-select" v-model.number="pickMonth">
        <option v-for="(m, i) in calendar.months" :key="'m-' + i" :value="i">
          {{ m.name }}
        </option>
      </select>

      <label class="sr-only" for="dp-day">Day</label>
      <select id="dp-day" class="dp-select" v-model.number="pickDay">
        <option v-for="d in dayOptions" :key="'d-' + d" :value="d">
          {{ d }}
        </option>
      </select>

      <button class="dp-btn" @click="goToPickedDate">Go</button>
    </div>

    <div class="months">
      <div v-for="monthIndex in monthIndices" :key="monthIndex" class="month">
        <h5>{{ calendar.months[monthIndex].name }}</h5>

        <div class="weekdays">
          <span
            v-for="(weekday, index) in calendar.weekdays"
            :key="'weekday-' + index"
            class="weekday lil-txt"
          >
            {{ weekday }}
          </span>
        </div>

        <div class="days">
          <span
            v-for="n in getLeadingEmptyDays(monthIndex, displayedYear)"
            :key="'empty-' + monthIndex + '-' + n"
            class="day empty"
          ></span>
          <span
            v-for="dayIndex in calendar.months[monthIndex].length"
            :key="'day-' + monthIndex + '-' + dayIndex"
            class="day"
            :class="{
              current: isCurrentDate(monthIndex, dayIndex),
              focused:
                focusDate &&
                focusDate.year === displayedYear &&
                focusDate.timespan === monthIndex &&
                focusDate.day === dayIndex,
              selected:
                !focusDate &&
                displayedYear === parseYearInput(pickYearInput) &&
                monthIndex === pickMonth &&
                dayIndex === pickDay,
            }"
          >
            <div class="lil-txt">{{ dayIndex }}</div>
            <svg
              class="moon-icon"
              preserveAspectRatio="xMidYMid"
              width="20"
              height="20"
              viewBox="0 0 100 100"
              :title="getMoonPhaseLabel(getMoonPhaseForDate(monthIndex, dayIndex))"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                :style="`fill: ${calendar.months[monthIndex].length === 1 ? '#b33d3d' : moonColor}`"
              />
              <path
                :d="getMoonPhaseShape(getMoonPhaseForDate(monthIndex, dayIndex))"
                :fill="getMoonPhaseFill(getMoonPhaseForDate(monthIndex, dayIndex))"
              />
              <circle cx="50" cy="50" r="45" stroke="#2d2b29" fill="none" stroke-width="7" />
            </svg>
            <div
              class="season-indicator"
              :style="{ backgroundColor: getSeasonColor(monthIndex, dayIndex) }"
            ></div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import calendarJson from '../assets/kirellian-calendar.json';

export default {
  name: 'KirellianCalendar',
  props: {
    focusDate: { type: Object, default: null },
  },
  emits: ['update:focusDate'],
  setup(props, { emit }) {
    const yearData = calendarJson.static_data.year_data;
    const seasons = calendarJson.static_data.seasons.data;
    const seasonSettings = calendarJson.static_data.seasons?.global_settings || {};
    const seasonOffset =
      typeof seasonSettings.season_offset === 'number' ? seasonSettings.season_offset : 0;
    const moonColor = calendarJson.static_data.moons?.[0]?.color || '#e8e0c8';
    const redMoonColor = '#b33d3d';

    const moonPhaseLabels = [
      'New Moon',
      'Waxing Crescent',
      'First Quarter',
      'Waxing Gibbous',
      'Full Moon',
      'Waning Gibbous',
      'Third Quarter',
      'Waning Crescent',
    ];

    function phaseIndexFromLabel(index) {
      return [0, 3, 7, 10, 14, 17, 21, 24][index];
    }

    function getMoonPhaseLabel(phaseIndex) {
      const mapped = [0, 3, 7, 10, 14, 17, 21, 24];
      const nearest = mapped.reduce((prev, curr) =>
        Math.abs(curr - phaseIndex) < Math.abs(prev - phaseIndex) ? curr : prev
      );
      return moonPhaseLabels[mapped.indexOf(nearest)];
    }

    const calendar = {
      months: yearData.timespans,
      weekdays: yearData.global_week,
      firstDayOffset: (yearData.first_day || 0) - 1,
    };

    const currentDate = calendarJson.dynamic_data;
    const displayedYear = ref(props.focusDate?.year ?? currentDate.year);

    // Keep displayedYear in sync if parent changes focusDate
    watch(
      () => props.focusDate && props.focusDate.year,
      (y) => {
        if (typeof y === 'number') displayedYear.value = y;
      }
    );

    const monthIndices = computed(() =>
      props.focusDate ? [props.focusDate.timespan] : calendar.months.map((_, i) => i)
    );

    function getTotalDaysInYear() {
      return calendar.months.reduce((sum, m) => sum + m.length, 0);
    }

    function getAbsoluteDay(monthIndex, day) {
      return calendar.months.slice(0, monthIndex).reduce((acc, m) => acc + m.length, 0) + (day - 1);
    }

    function getWeekdayIndex(monthIndex, day, year) {
      const totalDaysInYear = getTotalDaysInYear();
      const yearOffset = ((year - 1) * totalDaysInYear) % calendar.weekdays.length;
      const absoluteDay = getAbsoluteDay(monthIndex, day);
      return (calendar.firstDayOffset + yearOffset + absoluteDay) % calendar.weekdays.length;
    }

    function getLeadingEmptyDays(monthIndex, year) {
      return getWeekdayIndex(monthIndex, 1, year);
    }

    function isCurrentDate(monthIndex, dayIndex) {
      return (
        currentDate.year === displayedYear.value &&
        currentDate.timespan === monthIndex &&
        currentDate.day === dayIndex
      );
    }

    function getSeasonColor(monthIndex, day) {
      const dayOfYear = getAbsoluteDay(monthIndex, day);
      const total = getTotalDaysInYear();
      const shifted = (dayOfYear - seasonOffset + total) % total;
      const season = seasons.find((s) => {
        const start = ((s.start % total) + total) % total;
        const end = ((s.end % total) + total) % total;
        if (start <= end) return shifted >= start && shifted < end;
        return shifted >= start || shifted < end;
      });
      return season?.color?.[0] || 'transparent';
    }

    function getMoonPhaseForDate(monthIndex, day) {
      const absoluteDay = getAbsoluteDay(monthIndex, day);
      return (absoluteDay + 20) % 28;
    }

    function getMoonPhaseShape(phaseIndex) {
      const label = getMoonPhaseLabel(phaseIndex);
      switch (label) {
        case 'New Moon':
          return `M 5 50 A 45 45 0 1 1 95 50 A 45 45 0 1 1 5 50 Z`;
        case 'Full Moon':
          return '';
        case 'First Quarter':
          return `M 50 5 A 45 45 0 0 0 50 95 L 50 5 Z`;
        case 'Third Quarter':
          return `M 50 5 A 45 45 0 0 1 50 95 L 50 5 Z`;
        case 'Waxing Crescent':
          return `M 50 5 A 45 45 0 1 0 50 95 A 20 45 0 1 0 50 5 Z`;
        case 'Waning Crescent':
          return `M 50 5 A 45 45 0 1 1 50 95 A 20 45 0 1 1 50 5 Z`;
        case 'Waxing Gibbous':
          return `M 50 5 A 45 45 0 1 0 50 95 A 20 45 0 0 1 50 5 Z`;
        case 'Waning Gibbous':
          return `M 50 5 A 45 45 0 1 1 50 95 A 20 45 0 0 0 50 5 Z`;
        default:
          return '';
      }
    }

    function getMoonPhaseFill(phaseIndex) {
      const label = getMoonPhaseLabel(phaseIndex);
      if (label === 'New Moon') return '#2d2b29';
      if (label === 'Full Moon') return '#e8e0c8';
      return '#2d2b29';
    }

    function changeYear(offset) {
      displayedYear.value += offset;
    }

    // ===== Date Picker state and behaviour =====
    const pickYearInput = ref(String(props.focusDate?.year ?? displayedYear.value));
    const pickMonth = ref(props.focusDate?.timespan ?? 0);
    const pickDay = ref(props.focusDate?.day ?? 1);

    // Keep picker year in sync
    watch(
      () => [props.focusDate?.year, displayedYear.value],
      ([fy]) => {
        const y = typeof fy === 'number' ? fy : displayedYear.value;
        pickYearInput.value = String(y);
      }
    );

    const dayOptions = computed(() => {
      const len = calendar.months[pickMonth.value]?.length ?? 1;
      return Array.from({ length: len }, (_, i) => i + 1);
    });

    // Keep pickDay in range without mutating inside computed
    watch([pickMonth, dayOptions], () => {
      const len = dayOptions.value.length || 1;
      if (pickDay.value > len) pickDay.value = len;
      if (pickDay.value < 1) pickDay.value = 1;
    });

    function parseYearInput(str) {
      const m = String(str)
        .trim()
        .match(/^[+-]?\d+$/);
      if (!m) return null;
      const n = Number(m[0]);
      if (!Number.isFinite(n)) return null;
      return n;
    }

    function goToPickedDate() {
      const y = parseYearInput(pickYearInput.value);
      if (y === null) return; // Optionally show validation feedback
      displayedYear.value = y;
      emit('update:focusDate', {
        year: y,
        timespan: pickMonth.value,
        day: pickDay.value,
      });
    }

    return {
      calendar,
      currentDate,
      displayedYear,
      monthIndices,
      getLeadingEmptyDays,
      isCurrentDate,
      getSeasonColor,
      moonColor,
      redMoonColor,
      getMoonPhaseShape,
      getMoonPhaseFill,
      getMoonPhaseForDate,
      moonPhaseLabels,
      phaseIndexFromLabel,
      getMoonPhaseLabel,
      changeYear,
      // picker
      pickYearInput,
      pickMonth,
      pickDay,
      dayOptions,
      goToPickedDate,
      parseYearInput,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.year-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.year-nav button {
  background: none; /* remove background */
  border: none; /* remove border */
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 1.2rem; /* make icon a bit larger */
  color: #8a7d5e; /* warm brass tone */
  font-family: serif;
  transition: color 0.2s, transform 0.1s;

  &:hover {
    color: #c79d28; /* brighter gold on hover */
    transform: translateY(-1px);
  }

  &:active {
    color: #7b6a50; /* darker when pressed */
    transform: translateY(0);
  }
}

/* Date picker */
.date-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 1rem;
}

.dp-input,
.dp-select {
  background: #2f2e2c; /* fits your $bg-mid vibe */
  border: 1px solid #4a473f;
  color: #e8e0c8;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  min-width: 7ch;
}

.dp-select {
  min-width: 14ch;
}

.dp-btn {
  background: none;
  border: 1px solid #8a7d5e;
  color: #e8e0c8;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: serif;
}

.dp-btn:hover {
  border-color: #c79d28;
  color: #f4e9c9;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.calendar {
  padding: 1rem;
  max-width: calc(3rem * 7 + 14rem);
  margin: 0 auto;
}
.months {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.month {
  border: 1px solid $bg-light;
  padding: 1rem;
  border-radius: 5px;
}
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0.5rem 0;
}
.weekday {
  text-align: center;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}
.day {
  width: 40px;
  text-align: center;
  background: $bg-mid;
  padding: 0.25rem;
  border-radius: 3px;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.day.empty {
  background: transparent;
  border: none;
}
.day.current {
  background: #8a7d5e;
  font-weight: bold;
}
/* Highlight for focused day in single-month mode */
.day.focused {
  background: #8a7d5e;
  font-weight: bold;
}
.day.current.focused {
  background: #8e7460; /* ensure focused colour wins over .current */
}

.day.selected {
  background: #8a7d5e;
  font-weight: bold;
}
.moon-icon {
  margin-top: 4px;
  margin-bottom: 2px;
}
.season-indicator {
  width: 100%;
  height: 4px;
  margin-top: 2px;
  border-radius: 1px;
}


</style>
