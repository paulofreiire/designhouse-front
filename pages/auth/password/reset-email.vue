<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        RESET PASSWORD
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          {{ status }}
        </alert-success>
        <div class="form-group">
          <base-input
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Email">
          </base-input>
        </div>
        <div class="text-center">
          <base-button :loading="form.busy">
            Send Reset Login
          </base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          <nuxt-link :to="{ name: 'login'}" class="color-blue" href="#"> Back to Login</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        status: '',
        form: this.$vform({
          email: '',
        })
      };
    },

    methods: {
      submit() {

        this.form.post('/password/email').then(res => {
          this.status = res.data.message;
          this.form.reset();
        });
      }
    }


  };
</script>

<style scoped>

</style>
