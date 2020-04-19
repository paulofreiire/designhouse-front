<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        RESET PASSWORD
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          {{ status }}
          <nuxt-link to="{name: 'login'}">Proceed to login</nuxt-link>
        </alert-success>
        <div class="form-group">
          <base-input
            isReadOnly="true"
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Email">
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="password_"
            inputType="password"
            v-model="form.password"
            placeholder="Password">
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="password_confirmation"
            inputType="password"
            v-model="form.password_confirmation"
            placeholder="Password confirmation">
          </base-input>
        </div>
        <div class="text-center">
          <base-button :loading="form.busy">
            Confirm
          </base-button>
        </div>
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
          password: '',
          password_confirmation: '',
          token: ''
        })
      };
    },

    methods: {
      submit() {
        this.form.post('/password/reset').then(res => {
          this.status = res.data.status;
          this.form.reset();
        });
      }
    },

    created() {
      this.form.email = this.$route.query.email
      this.form.token = this.$route.params.token
    }
  };
</script>

<style scoped>

</style>
