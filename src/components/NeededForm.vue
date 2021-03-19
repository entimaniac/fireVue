<template>
  <div class="formClass">
    <p>Enter your yearly expenses:</p>
    <input v-model.number="yearlyExpenses" type="number">
    <p>Based on a 4% safe withdrawal rate, the amount you need saved and safely invested is:</p>

    ${{ calculatedTotal.toLocaleString() }}
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
.formClass {
  background: lightslategrey;
  padding: 1rem;
}

</style>
