<template>
  <div class="my-lg-3 container">
    <SingleForm @submitted="onSubmit" />
    <Profit :profit="profit" />
  </div>
</template>

<script>
import SingleForm from "../components/SingleForm.vue";
import Profit from "../components/Profit.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Single",
  data() {
    return {
      profit: 0,
    };
  },
  components: {
    SingleForm,
    Profit,
  },
  methods: {
    onSubmit(data) {
      const grossPiecePrice =
        parseInt(data.shotNo) *
        parseInt(data.pieceNo) *
        parseInt(data.pieceRate);
      const grossDanaPrice =
        (parseInt(data.weight) *
          parseInt(data.shotNo) *
          parseInt(data.danaRate)) /
        1000;
      const grossBijliPrice = parseInt(data.units) * parseInt(data.unitsCost);
      const netProfit =
        parseInt(grossPiecePrice) -
        (parseInt(grossDanaPrice) +
          parseInt(grossBijliPrice) +
          parseFloat(data.labour) +
          parseFloat(data.extra));
      this.profit = netProfit;
    },
  },
};
</script>
