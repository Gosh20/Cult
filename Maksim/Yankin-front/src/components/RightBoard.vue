<template>
  <div class="right-board">
    <div v-if="!isCultEmpty">
      <div>Id: {{ cult.id }}</div>
      <div>Название: {{ cult.securityStatus }}</div>
      <div>Должность руководителя: {{ cult.year }}</div>
      <div>Фио руководителя: {{ cult.admArea }}</div>
      <div>Сайт: {{ cult.district }}</div>
      <div>Сайт: {{ cult.address }}</div>

    </div>
    <div v-else class="right-board__no-selected">
      Выберите музей, чтобы посмотреть адрес,руководителя и сайт
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    cult: {
      type: Object,
      required: true
    }
  },
  computed: {
    isCultEmpty() {
      return Object.keys(this.cult).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
