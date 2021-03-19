<template>
  <div>
    <p>hi</p>
    <p>This app is built with Vue JS.</p>
    <p>Below are a few tools to help educate you on the FIRE movement and calculate what you'll need in order to FIRE.</p>
  </div>
</template>

<script>
export default {
  name: 'TotalAmount',
  data() {
    return {
      yearlyExpenses: 0,
    }
  },
  computed: {
    calculatedTotal: function () {
      return this.yearlyExpenses * 25;
    }
  }
}
</script>

<style scoped>

</style>
