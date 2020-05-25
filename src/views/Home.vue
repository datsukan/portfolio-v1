<template>
  <v-container fluid fill-height class="home-hero">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-layout class="d-flex align-center justify-center flex-wrap mb-4">
          <h1 class="display-3 white--text font-weight-bold">Shonan Kandatsu</h1>
          <v-img src="../assets/logo_white.png" max-width="80" class="ma-4"></v-img>
          <h1 class="display-3 white--text font-weight-bold">Portfolio</h1>
        </v-layout>
        <h4 class="headline white--text">Web Developer</h4>
        <v-layout class="d-flex align-center justify-center flex-wrap mt-10">
          <v-btn
            class="mx-2 white"
            fab
            dark
            large
            outlined
            color="orange"
            href="https://github.com/datsukan"
            target="_blank"
          >
            <v-icon large dark>mdi-github</v-icon>
          </v-btn>
          <v-btn
            class="mx-2 white"
            fab
            dark
            large
            outlined
            color="orange"
            href="https://twitter.com/datsukan1"
            target="_blank"
          >
            <v-icon large dark>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            class="mx-2 white"
            fab
            dark
            large
            outlined
            color="orange"
            href="https://qiita.com/datsukan"
            target="_blank"
          >
            <span class="sns-link-text">Qiita</span>
          </v-btn>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.home-hero {
  background-color: orange;
  height: 100vh;
}

.sns-link-text {
  text-transform: none;
}
</style>
