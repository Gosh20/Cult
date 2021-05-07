<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :cults="cultsList"
      @change-cult="handleChangeCult"
    />
    <RightBoard slot="rightBoard" :cult="activeCult" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeCultId: null,
      cultsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/cults")
      .then(response => (this.cultsList = response.data.cults));
  },
  computed: {
    activeCult() {
      const fallback = {};
      if (!this.activeCultId) {
        return fallback;
      }

      return (
        this.cultsList.find(({ id }) => id === this.activeCultId) ||
        fallback
      );
    }
  },
  methods: {
    handleChangeCult({ id }) {
      this.activeCultId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #112d32;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #88bdbc; /*#0b0c10; */
  --dark_80: #1f2833;
  --gray: #eae7dc;
  --ultramarine_100: #4f4a41;
  --ultramarine_80: #254e58;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
