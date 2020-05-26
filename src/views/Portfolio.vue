<template>
  <v-container class="full-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold orange--text mb-10">Portfolio</h3>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-dialog v-model="dialog1" width="1300">
              <template v-slot:activator="{ on }">
                <v-card width="400" height="250" class="mx-auto" v-on="on">
                  <v-img src="../assets/contents/portfolio1.png" width="400" height="250"></v-img>
                </v-card>
              </template>
              <v-card>
                <v-card-title>
                  <span class="font-weight-bold info--text">ポートフォリオサイト</span>
                  <v-spacer></v-spacer>
                  <v-btn color="info" text @click="dialog1 = false" icon>
                    <v-icon large>mdi-close-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" md="6">
                      <v-carousel
                        cycle
                        interval="5000"
                        hide-delimiter-background
                        show-arrows-on-hover
                      >
                        <v-carousel-item :key="1">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio1_slide1.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="2">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio1_slide2.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="3">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio1_slide3.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                    <v-col cols="12" md="6" class="px-4">
                      <p class="title font-weight-bold">概要</p>
                      <p>
                        私のポートフォリオサイトです。
                        <br />Vue.js + Vuetifyをメインに使用したSPA（シングルページアプリケーション）になっています。
                        <br />モダンJavaScriptを使用してフロントリッチな実装にすることで、UI/UXを高めています。
                        <br />UIコンポーネントを上手く活用してできるかぎりオシャレで見やすいサイトを目指しました。
                        <br />
                        <br />また、AWS S3・CloudFrontを用いて簡易的にサーバーレスを実現しました。
                        <br />GitHubとCircleCIを連携してCI/CD（自動テスト/自動デプロイ）を行っています。
                      </p>
                      <v-btn color="primary" href="/" target="_blank" outlined small>
                        ポートフォリオサイトへ
                        <v-icon class="ml-2">mdi-launch</v-icon>
                      </v-btn>
                      <v-divider class="my-2"></v-divider>
                      <p class="title font-weight-bold mb-0">使用技術</p>
                      <v-chip-group column>
                        <v-chip v-for="tag in tags1" :key="tag" small>{{ tag }}</v-chip>
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-dialog v-model="dialog2" width="1300">
              <template v-slot:activator="{ on }">
                <v-card width="400" height="250" class="mx-auto" v-on="on">
                  <v-img src="../assets/contents/portfolio2.png" width="400" height="250"></v-img>
                </v-card>
              </template>
              <v-card>
                <v-card-title>
                  <span class="font-weight-bold info--text">Chrome拡張機能</span>
                  <v-spacer></v-spacer>
                  <v-btn color="info" text @click="dialog2 = false" icon>
                    <v-icon large>mdi-close-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" md="6">
                      <v-carousel
                        cycle
                        interval="5000"
                        hide-delimiter-background
                        show-arrows-on-hover
                      >
                        <v-carousel-item :key="1">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio2_slide1.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="2">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio2_slide2.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                    <v-col cols="12" md="6" class="px-4">
                      <p class="title font-weight-bold">概要</p>
                      <p>
                        Chatworkに機能追加するChrome拡張機能です。
                        <br />ReactのSPA（シングルページアプリケーション）で開発されているChatworkのUIに介入して、
                        出退勤のメッセージをワンクリックで送信できるボタンを追加します。
                        <br />社内の運用で実際に用いています。
                        <br />Googleが提供している各種Chrome APIとJavaScript（jQuery）を用いて実装しました。
                      </p>
                      <v-btn
                        color="primary"
                        href="https://chrome.google.com/webstore/detail/chatwork-timecard-plugin/ckoifmdeompppgeellbokfgekhojcheh"
                        target="_blank"
                        outlined
                        small
                      >
                        Chrome ウェブストアへ
                        <v-icon class="ml-2">mdi-launch</v-icon>
                      </v-btn>
                      <v-divider class="my-2"></v-divider>
                      <p class="title font-weight-bold mb-0">使用技術</p>
                      <v-chip-group column>
                        <v-chip v-for="tag in tags2" :key="tag" small>{{ tag }}</v-chip>
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-dialog v-model="dialog3" width="1300">
              <template v-slot:activator="{ on }">
                <v-card width="400" height="250" class="mx-auto" v-on="on">
                  <v-img src="../assets/contents/portfolio3.png" width="400" height="250"></v-img>
                </v-card>
              </template>
              <v-card>
                <v-card-title>
                  <span class="font-weight-bold info--text">スキル情報共有アプリ</span>
                  <v-spacer></v-spacer>
                  <v-btn color="info" text @click="dialog3 = false" icon>
                    <v-icon large>mdi-close-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" md="6">
                      <v-carousel
                        cycle
                        interval="5000"
                        hide-delimiter-background
                        show-arrows-on-hover
                      >
                        <v-carousel-item :key="1">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide1.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="2">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide2.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="3">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide3.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="4">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide4.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="5">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide5.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item :key="6">
                          <v-sheet height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                              <v-img src="../assets/contents/portfolio3_slide6.png"></v-img>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                    <v-col cols="12" md="6" class="px-4">
                      <p class="title font-weight-bold">概要</p>
                      <p>
                        エンジニアやIT職種の人材のスキル情報を共有するためのWebアプリケーションです。
                        <br />Laravel + Vue.js +
                        Vuetifyをメインに使用したSPA（シングルページアプリケーション）になっています。
                        <br />認証・ユーザー管理といった標準的な機能に加え、
                        詳細かつ閲覧しやすい形式でスキル情報を登録・更新・参照可能になっています。
                        <br />APIによる非同期通信を用いて全文検索や一括更新を快適な速度で処理できるパフォーマンスに調整しています。
                        <br />現在も継続してバージョンアップを行っています。
                      </p>
                      <v-divider class="my-2"></v-divider>
                      <p class="title font-weight-bold mb-0">使用技術</p>
                      <v-chip-group column>
                        <v-chip v-for="tag in tags3" :key="tag" small>{{ tag }}</v-chip>
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      tags1: [
        'Vue.js',
        'Vue CLI',
        'Vue Router',
        'TypeScript',
        'Vuetify',
        'Chart.js',
        'AWS S3',
        'AWS Route53',
        'AWS CloudFront',
        'AWS Lamda',
        'CircleCI',
        'GitHub',
      ],
      tags2: ['jQuery', 'JavaScript', 'Bootstrap', 'Chrome API'],
      tags3: ['Laravel', 'Vue.js', 'Vue Router', 'Vuex', 'Vuetify', 'MySQL'],
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
