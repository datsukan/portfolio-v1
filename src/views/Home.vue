<template>
  <v-container fluid fill-height class="home-hero soda-target">
    <v-row align="center" justify="center" class="home-contents">
      <v-col class="text-center" cols="12">
        <v-layout class="d-flex align-center justify-center flex-wrap mb-4">
          <h1 class="display-3 white--text font-weight-bold">Shonan Kandatsu's</h1>
          <v-img src="../assets/logo_white.png" max-width="80" class="logo-orange ma-4"></v-img>
          <h2 class="display-3 white--text font-weight-bold">Portfolio</h2>
        </v-layout>
        <h3 class="headline white--text">Web Developer</h3>
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

    <!-- 泡のアニメーション -->
    <div class="soda-container">
        <div class="soda" v-for="i in 100" :key="i"></div>
    </div>
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

<style lang="scss" scoped>
@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.home-hero {
  background-color: orange;
  height: 100vh;
}

.home-contents {
  z-index: 1;
}

.sns-link-text {
  text-transform: none;
}

.logo-orange {
  animation: rotation 6s linear infinite;
}

// 泡のアニメーション
@import '@/assets/sass/soda.scss';

</style>
