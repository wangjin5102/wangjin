<template>
  <div :style="`background-image:url(${bg}); height: calc(100vh); background-size: cover`">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      class='form'
    >
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:10"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="自动登录"
            type="checkbox"
            required
          ></v-checkbox>
        </validation-provider>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          登录
        </v-btn>
        <v-btn @click="clear">
          重置
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
  import { required, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
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
      msg: 'Welcome to Your Vue.js App',
      bg: '../../../static/images/bg.png'
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
<style scoped>
  .form form {
    background: #fff;
  }
</style>
