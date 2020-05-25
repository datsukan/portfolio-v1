<template>
  <v-container class="full-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold orange--text mb-10">Skill</h3>
        <v-row align="center" justify="center" dense>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="langData" :options="langOptions"></radar-chart>
            </v-card-text>
          </v-col>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="fwData" :options="fwOptions"></radar-chart>
            </v-card-text>
          </v-col>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="osData" :options="osOptions"></radar-chart>
            </v-card-text>
          </v-col>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="mwData" :options="mwOptions"></radar-chart>
            </v-card-text>
          </v-col>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="infraData" :options="infraOptions"></radar-chart>
            </v-card-text>
          </v-col>
          <v-col cols="10" sm="6" md="4" lg="3" xl="2" class="text-center">
            <v-card-text>
              <radar-chart :data="toolData" :options="toolOptions"></radar-chart>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RadarChart from '../components/RadarChart.vue';

export default {
  name: 'Skill',
  components: {
    RadarChart,
  },
  data() {
    return {
      langData: {
        labels: ['Java', 'C#', 'VB', 'Bash', 'SQL', 'PHP', 'JavaScript', 'CSS', 'HTML'],
        datasets: [
          {
            label: 'プログラミング言語',
            data: [1, 1, 2, 2, 3, 4, 4, 4, 4],
            borderColor: 'rgba(255, 0, 0, 0.5)',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          },
        ],
      },
      langOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
      fwData: {
        labels: [
          '.NET',
          'Laravel',
          'Lumen',
          'Phalcon',
          'Vue.js',
          'Vuetify',
          'Buefy',
          'jQuery',
          'Bootstrap',
          'Bulma',
          'Element UI',
        ],
        datasets: [
          {
            label: 'フレームワーク・ライブラリ',
            data: [1, 4, 3, 2, 4, 4, 4, 3, 3, 4, 2],
            borderColor: 'rgba(0, 0, 255, 0.5)',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
          },
        ],
      },
      fwOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
      osData: {
        labels: ['CentOS', 'Ubuntu', 'Amazon Linux', 'RedHat', 'Windows'],
        datasets: [
          {
            label: 'サーバーOS',
            data: [4, 4, 3, 3, 1],
            borderColor: 'rgba(0, 255, 0, 0.5)',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
          },
        ],
      },
      osOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
      mwData: {
        labels: ['Apache', 'Nginx', 'MySQL', 'MariaDB', 'PostgreSQL'],
        datasets: [
          {
            label: 'サーバーミドルウェア',
            data: [3, 4, 4, 4, 4],
            borderColor: 'rgba(255, 0, 255, 0.5)',
            backgroundColor: 'rgba(255, 0, 255, 0.2)',
          },
        ],
      },
      mwOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
      infraData: {
        labels: ['AWS', 'GCP', 'Azure', 'Firebase', 'オンプレ'],
        datasets: [
          {
            label: 'インフラストラクチャー',
            data: [3, 2, 1, 2, 1],
            borderColor: 'rgba(255, 255, 0, 0.5)',
            backgroundColor: 'rgba(255, 255, 0, 0.2)',
          },
        ],
      },
      infraOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
      toolData: {
        labels: ['Eclipse', 'Visual Studio', 'VSCode', 'Vim', 'SVN', 'Git', 'Putty', 'Win SCP', 'DBeaver', 'A5M2'],
        datasets: [
          {
            label: 'ツール',
            data: [2, 2, 4, 3, 2, 4, 5, 5, 3, 4],
            borderColor: 'rgba(0, 255, 255, 0.5)',
            backgroundColor: 'rgba(0, 255, 255, 0.2)',
          },
        ],
      },
      toolOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
      },
    };
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

<style scoped></style>
