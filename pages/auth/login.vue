<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{ form.errors.get('message')}}
          <nuxt-link :to="{ name: 'verification.resend'}">
            Resend verification email
          </nuxt-link>
        </alert-error>
        <div class="form-group">
          <base-input
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Email">
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="password"
            inputType="password"
            v-model="form.password"
            placeholder="Password">
          </base-input>
        </div>
        <div class="mt-2 mb-2 d-inline-flex justify-content-between">
          <nuxt-link :to="{ name: 'password-email'}" class="forgot-pass color-blue font-14 fw-400 p-2" href="#"> Forgot
            password?
          </nuxt-link>

          <div class="p-2">
            <base-button :loading="form.busy">
              Login
            </base-button>
          </div>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link :to="{ name: 'register'}" class="color-blue" href="#"> Create an account</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "login.vue",
    middleware: ['guest'],
    data() {
      return {
        form: this.$vform({
          email: '',
          password: '',
        })
      };
    },

    methods: {
      submit() {
        this.$auth.loginWith('local', {
          data: this.form
        }).then(res => {
        }).catch(error => {
          this.form.errors.set(error.response.data.errors)
          console.log(error.response.data.errors)
        });
      }
    }

  };
</script>

<style scoped>

</style>
