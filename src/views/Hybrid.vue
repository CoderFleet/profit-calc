<template>
  <div class="my-lg-3 container">
    <HybridForm @submitted="onSubmit" />
    <Profit :profit="profit" :weight="rweight"/>
  </div>
</template>

<script>
import HybridForm from "../components/HybridForm.vue";
import Profit from "../components/Profit.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hybrid',
  components: {
    HybridForm,
    Profit,
  },
  data(){
    return {
      profit : 0,
      rweight : 0
    }
  },
  methods : {
    onSubmit(data){
      const grossDanaPrice =
        (parseFloat(data.shotWeight) *
          parseFloat(data.shotNo) *
          parseFloat(data.danaRate)) /
        1000;
      console.log(grossDanaPrice);
      const grossBijliPrice = parseInt(data.units) * parseFloat(data.unitsCost);
      console.log(grossBijliPrice);
      const grossPiecePrice = data.shotNo * (data.r1 * data.q1 + data.r2 * data.q2 + data.r3 * data.q3 + data.r4 * data.q4 + data.r5 * data.q5)
      console.log(grossPiecePrice);

      const netProfit = grossPiecePrice - grossDanaPrice - grossBijliPrice - data.labour - data.extra

      const runnerWeight = data.runnerWeight * data.shotNo / 1000

      this.profit = netProfit
      this.rweight = runnerWeight
    }
  }
}
</script>
