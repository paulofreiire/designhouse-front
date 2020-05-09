<template>
  <div>
    <textarea
      class="form-control form-control-lg font-14 fw-300"
      :rows=rows
      :readonly=isReadOnly
      :placeholder="placeholder"
      :class="{'is-invalid' : form.errors.has(field)}"
      :value="value"
      @input="handleInput"
    >
    <has-error :form="form" :field="field"></has-error>
    </textarea>
  </div>
</template>

<script>
  export default {
    name: "base-textarea",
    props: {
      form: {
        type: Object,
        require: true
      },
      field: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: ''
      },
      rows: {
        type: Number,
        default: 3
      },
      isReadOnly: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      handleInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
