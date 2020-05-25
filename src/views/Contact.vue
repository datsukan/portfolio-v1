<template>
  <v-container class="full-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold orange--text mb-10">Contact</h3>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" md="9" lg="6" class="text-left">
            <p>
              最後までご覧いただきありがとうございました。<br />
              このサイトを通して私のことを少しでも知っていただけたのなら嬉しいです。<br />
              もしこのサイトや私について何かコメントがありましたら、下記のフォームをご利用ください。<br />
            </p>
          </v-col>
        </v-row>
        <v-form ref="form">
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-text-field label="お名前" color="orange" :counter="50" :rules="rules.name"></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-text-field label="メールアドレス" color="orange" :rules="rules.email"></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-textarea label="内容" color="orange" :counter="2000" :rules="rules.content"></v-textarea>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-btn color="success" width="100%" @click="submit()">送信</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      送信しました
      <v-btn color="success" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      snackbar: false,
      rules: {
        name: [
          v => !!v || 'お名前は必須です。',
          v => (v && v.length <= 50) || 'お名前は50文字以内で入力してください。',
        ],
        email: [
          v => !!v || 'メールアドレスは必須です。',
          v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が不正です。',
        ],
        content: [
          v => !!v || '内容は必須です。',
          v => (v && v.length <= 2000) || '内容は2000文字以内で入力してください。',
        ],
      },
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  methods: {
    submit() {
      if (this.validate()) {
        this.reset();
        this.snackbar = true;
      }
    },
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {},
};
</script>

<style scoped></style>
