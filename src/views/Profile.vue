<template>
  <v-container class="full-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold orange--text mb-10">Profile</h3>
        <v-row dense>
          <v-col cols="12" md="5" class="text-md-right">
            <v-avatar size="250" class="mr-md-12">
              <v-img src="../assets/contents/face_photo.png"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-left">
              <p class="headline mb-5">神達 小楠 （かんだつ しょうなん）</p>
              <p>
                平成11年（1999年）生まれの21歳。
                <br />受託開発企業にてウォーターフォール型のWeb開発を小規模～大規模まで経験。
                <br />サーバーサイド・フロントエンドの設計・開発をメインに、IaaSを用いたインフラ構築、モバイルアプリ開発もかじってます。
                <br />
                <br />基本的にコンピューター・IT大好き人間のため、日常的にアプリケーション開発やテック系の情報収集をしてます。
                <br />プライベートでは筋トレしたり、Youtubeでガジェット紹介動画を見たりするのが好きです。
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
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
p {
  line-height: 1.8em;
}
</style>
