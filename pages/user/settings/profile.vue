<template>
  <div class="setting-block">
    <div class="setting-title font-16 fw-500">
      Profile
    </div>
    <div class="setting-body white-bg-color">
      <form class="custom-form" @submit.prevent="update">
        <div class="row">
          <div class="col-md-6">
            <alert-success :form="form">
              Profile information updated successfully
            </alert-success>

            <div class="form-group">
              <base-input
                :form="form"
                field="name"
                v-model="form.name"
                placeholder="Full Name">
              </base-input>
            </div>
            <div class="form-group">
              <base-input
                :form="form"
                field="tagline"
                v-model="form.tagline"
                placeholder="Tagline">
              </base-input>
            </div>
            <div class="form-group">
              <base-gmap
                :initialValue="form.formatted_address"
                @address-response="handleAddress">

              </base-gmap>
            </div>
            <div class="form-group">
              <base-textarea
                :form="form"
                field="about"
                :rows=4
                v-model="form.about"
                placeholder="Enter some information abour yourself">
              </base-textarea>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="available_to_hire"
                    v-model="form.available_to_hire"
                  />
                  <label
                    class="custom-control-label"
                    value="true"
                    for="available_to_hire">
                    Available to hire?
                  </label>
                </div>
                <div class="text-right">
                  <base-button :loading="form.busy">Update profile</base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import vform from "../../../plugins/vform";
  import BaseInput from "../../../components/_global/inputs/_base-input";
  import BaseTextarea from "../../../components/_global/_base-textarea";
  import BaseButton from "../../../components/_global/buttons/_base-button";
  import BaseGmap from "../../../components/_global/inputs/_base-gmap";

  export default {
    components: {BaseButton, BaseTextarea, BaseInput, BaseGmap},
    data() {
      return {
        form: this.$vform({
          name: '',
          about: '',
          tagline: '',
          formatted_address: '',
          latitude: '',
          longitude: '',
          available_to_hire: false

        })
      }
    },
    methods: {
      update() {
        this.form.put(`/settings/profile`)
        .then(res => console.log(res))
        .catch(e => console.log(e))
      },
      handleAddress(data) {
        this.form.formatted_address = data.formatted_address;
        this.form.latitude = data.latitude;
        this.form.longitude = data.longitude;
        console.log('yes')
      }
    },
    mounted() {
      Object.keys(this.form).forEach(k => {
        if (this.$auth.user.hasOwnProperty(k)) {
          this.form[k] = this.$auth.user[k];
        }
      });

    }
  }
</script>

<style scoped>

</style>
