<route lang="yaml">
  meta:
    layout: public
</route>

<template>
  <div :title="'My name is ' + fullname">
    Hello {{ fullname }}
  </div>
  <button class="border-1 w-100" @click="updateName">
    Click Me {{ seq }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      fname: 'Somsak',
      lname: 'Sae-Lim',
      seq: 1,
    }
  },
  computed: {
    fullname() {
      return this.fname + ' ' + this.lname
    },
  },
  methods: {
    updateName() {
      this.seq = this.seq + 1
    },
  },
}
</script>
