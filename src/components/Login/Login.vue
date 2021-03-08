<template>
  <div class="login">
    <div class='formContainer'>
      <v-banner
        elevation="10"
        height='30'
        class="banner"
      >
        菜鸡互啄系统
      </v-banner>
      <validation-observer
        ref="observer"
      >
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="用户名"
            rules="required|max:10"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :error-messages="errors"
              label="请输入用户名"
              required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="密码"
            rules="required|max:10"
          >
            <v-text-field
              v-model="password"
              :counter="10"
              :error-messages="errors"
              label="请输入密码"
              required
              type='password'
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="checkbox"
          >
            <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              value="1"
              label="自动登录"
              type="checkbox"
            ></v-checkbox>
          </validation-provider>

          <v-btn
            class="mr-4"
            type="submit"
          >
            登录
          </v-btn>
          <v-btn @click="clear">
            重置
          </v-btn>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
  import { required, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_}不能为空',
  })

  extend('max', {
    ...max,
    message: '{_field_} 不能超过十个字符',
  })
export default {
  name: 'HelloWorld',
  components: {
    ValidationProvider,
    ValidationObserver,
  },


  data () {
    return {
      name: '',
      password: '',
    }
  },
  methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .login {
    background-image:url('../../../static/images/bg.png');
    height: calc(100vh);
    background-size: 100% 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .banner .v-banner__wrapper {
    font-size: 20px;
    border: none !important;
  }
  .formContainer {
    margin-right: 40px;
    margin-bottom: calc(50vh - 250px);
    width: 400px;
    padding: 10px;
  }
</style>
