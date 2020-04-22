<template>
  <div>
    <section class="hero text-center bg-secondary text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Upload a design
        </h1>
      </div>
    </section>

    <div class="upload-shot">
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <div class="card bg-shite shadow-sm">
              <div class="d-flex flex-column justify-content-center p-1">
                <div class="alert alert-danger" v-if="error">
                  <p>An error occureed during the upload process</p>
                  <p>{{error}}</p>
                </div>
                <slim-cropper :options="slimOptions">
                  <input type="file" name="slim"/>
                </slim-cropper>
                <div class="text-success caption-sm mt-2" v-if="uploading">
                  <i class="fas fa-spinner fa-spin"></i>
                </div>
              </div>
            </div>
            <div class="upload-para mt-2">
              <p class="font-14 fw-400">
                The image size should be a maximum of 3MB. Please resize
                your file accordingly before you upload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SlimCropper from "../../../components/slim/slim";

  export default {
    components: {SlimCropper},
    middleware: ['auth'],
    data() {
      return {
        slimOptions: {
          post: 'input',
          defaultInputName: 'image',
          maxFileSize: 3,
          service: this.slimService,
        },
        uploading: false,
        error: ''
      }
    },

    methods: {
      slimService(formdata, progress, success, failure, slim) {
        var image = new FormData()
        image.append('image', slim.data.input.file)
        console.log(slim.data)
        this.$axios.post('/designs', image)
          .then(res => {
            console.log(res)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => this.uploading = false)
      },
      slimInit(data, slim) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>


