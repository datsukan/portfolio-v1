<template>
  <v-container class="full-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold orange--text mb-10">Contact</h3>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" md="9" lg="6" class="text-left">
            <p>
              最後までご覧いただきありがとうございました。
              <br />このサイトを通して私のことを少しでも知っていただけたのなら嬉しいです。
              <br />もしこのサイトや私について何かコメントがありましたら、下記のフォームをご利用ください。
              <br />
            </p>
          </v-col>
        </v-row>
        <v-form ref="form">
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-text-field
                label="お名前"
                color="orange"
                :counter="50"
                :rules="rules.name"
                v-model="sendForm.name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-text-field
                label="メールアドレス"
                color="orange"
                :rules="rules.email"
                v-model="sendForm.email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-textarea
                label="内容"
                color="orange"
                :counter="2000"
                :rules="rules.content"
                v-model="sendForm.content"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" md="9" lg="6">
              <v-btn color="success" width="100%" @click="submit()" :disabled="isConnecting">送信</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ resultMessage }}
      <v-btn :color="result ? 'success' : 'error'" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      snackbar: false,
      isConnecting: false,
      result: true,
      resultMessage: '',
      mailSettings: {
        serviceId: 'gmail',
        templateId: 'template_portfolio',
        userId: 'user_qrCg0jqvB3t0jCvhDFUq3',
      },
      sendForm: {},
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
  created() {
    this.crearFrom();
    emailjs.init(this.mailSettings.userId);
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  methods: {
    submit() {
      if (this.validate()) {
        this.sendEmail();
      }
    },
    sendEmail() {
      this.isConnecting = true;
      emailjs.send(this.mailSettings.serviceId, this.mailSettings.templateId, this.sendForm).then(
        result => {
          this.reset();
          this.result = true;
          this.resultMessage = '送信しました';
          this.snackbar = true;
          this.isConnecting = false;
        },
        error => {
          console.log(error);
          this.result = false;
          this.resultMessage = '送信に失敗しました';
          this.snackbar = true;
          this.isConnecting = false;
        }
      );
    },
    crearFrom() {
      this.result = true;
      this.resultMessage = '';
      this.snackbar = false;
      this.sendForm = {
        name: '',
        email: '',
        content: '',
      };
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
