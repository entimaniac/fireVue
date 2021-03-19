<template>
  <div class="formClass">
    <p>If you need help figuring out your yearly expenses then try a budget!</p>
    <p>Below, enter you MONTHLY expenses for each category.</p>

    <div class='row'>
      <div class='column'>
        <div class="left-budget">housing: </div>
        <div class="left-budget">food: </div>
        <div class="left-budget">transportation: </div>
        <div class="left-budget">entertainment: </div>
      </div>

      <div class='column'>
        <div class="right-budget"><input v-model.number="housing" type="number"></div>
        <div class="right-budget"><input v-model.number="food" type="number"></div>
        <div class="right-budget"><input v-model.number="transportation" type="number"></div>
        <div class="right-budget"><input v-model.number="entertainment" type="number"></div>
      </div>
    </div>


    <!--    <div class="alignOnColon">housing <input v-model.number="housing" type="number"></div>-->
    <!--    <div class="alignOnColon">food <input v-model.number="food" type="number"></div>-->
    <!--    <div class="alignOnColon">transportation <input v-model.number="transportation" type="number"></div>-->
    <!--    <div class="alignOnColon">entertainment <input v-model.number="entertainment" type="number"></div>-->

    <p>Your total monthly expenses are:</p>
    ${{ totalMonthly.toLocaleString() }}
    <p>Which means your total yearly expenses are:</p>
    ${{ totalYearly.toLocaleString() }}
  </div>
</template>

<script>
export default {
  name: 'TotalAmount',
  data() {
    return {
      housing: 1100,
      food: 600,
      transportation: 500,
      entertainment: 300,
    }
  },
  computed: {
    totalMonthly: function () {
      return this.housing + this.food + this.transportation + this.entertainment;
    },
    totalYearly: function () {
      return this.totalMonthly * 12;
    }
  }
}
</script>

<style scoped>
.formClass {
  background: #55a0ef;
  padding: 1rem;
}


.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.left-budget {
  text-align: right;
  margin: .5rem;
}

.right-budget {
  text-align: left;
  margin: .5rem;
}

</style>
