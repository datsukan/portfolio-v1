<template>
  <v-content v-scroll="handleScroll">
    <home id="home"></home>
    <profile id="profile"></profile>
    <skill id="skill"></skill>
    <portfolio id="portfolio"></portfolio>
    <contact id="contact"></contact>
    <v-speed-dial fixed bottom right>
      <template v-slot:activator>
        <v-btn class="ma-2" fab dark large color="primary" @click="transition()">
          <v-icon dark>{{ transitionButtonIcon }}</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
    <v-footer>
      <v-container class="text-center">
        <p>&copy; 2020 Shonan Kandatsu</p>
      </v-container>
    </v-footer>
  </v-content>
</template>

<script>
import Home from './Home.vue';
import Profile from './Profile.vue';
import Skill from './Skill.vue';
import Portfolio from './Portfolio.vue';
import Contact from './Contact.vue';

export default {
  name: 'Frame',
  components: {
    Home,
    Profile,
    Skill,
    Portfolio,
    Contact,
  },
  data() {
    return {
      page: {
        1: '#home',
        2: '#profile',
        3: '#skill',
        4: '#portfolio',
        5: '#contact',
      },
      nowPage: 1,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  methods: {
    transition() {
      if (this.nowPage < 5) {
        this.$vuetify.goTo(this.page[this.nowPage + 1]);
        this.nowPage++;
      } else {
        this.$vuetify.goTo(this.page[1]);
        this.nowPage = 1;
      }
    },
    handleScroll() {
      const home = document.getElementById('home').getBoundingClientRect().top + window.pageYOffset;
      const profile = document.getElementById('profile').getBoundingClientRect().top + window.pageYOffset;
      const skill = document.getElementById('skill').getBoundingClientRect().top + window.pageYOffset;
      const portfolio = document.getElementById('portfolio').getBoundingClientRect().top + window.pageYOffset;
      const contact = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;
      const nowPosion = window.scrollY;

      if (nowPosion >= home && nowPosion < profile) {
        this.nowPage = 1;
      } else if (nowPosion >= profile && nowPosion < skill) {
        this.nowPage = 2;
      } else if (nowPosion >= skill && nowPosion < portfolio) {
        this.nowPage = 3;
      } else if (nowPosion >= portfolio && nowPosion < contact) {
        this.nowPage = 4;
      } else if (nowPosion >= contact) {
        this.nowPage = 5;
      }
    },
  },
  computed: {
    transitionButtonIcon() {
      return this.nowPage === 5 ? 'mdi-chevron-double-up' : 'mdi-chevron-down';
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 960px) {
  .full-height {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }
}
</style>
