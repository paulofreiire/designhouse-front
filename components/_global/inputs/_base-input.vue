<template>
  <input
    class="form-control form-control-lg font-14 fw-300"
    :type="inputType"
    :placeholder="placeholder"
    @input="handleInput"
  >

</template>

<script>
  export default {
    name: "base-input",
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    methods: {
      handleInput(e){
        console.log(e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
