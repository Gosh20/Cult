<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(cult, index) in cults"
      :key="cult.id"
      :id="cult.id"
      :row-number="index + 1"
      :title="cult.securityStatus"
      @change-cult="$emit('change-cult', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    cults: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
