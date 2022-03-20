<template>
  <form class="mainForm">
    <div class="mb-3">
      <label for="name">Handle Name</label>
      <input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="Enter Name Of Handle..."
      />
    </div>
    <div class="mb-3">
      <label for="weight">Weight Of 1 Shot(gm)</label>
      <input
        type="number"
        class="form-control"
        v-model="weight"
        placeholder="Enter Weight Of Handle..."
      />
    </div>
    <div class="mb-3">
      <label for="shotNo">No Of Shots</label>
      <input
        type="number"
        class="form-control"
        v-model="shotNo"
        placeholder="Enter Weight Of Handle..."
      />
    </div>
    <div class="mb-3">
      <label for="pieceNo"> Pieces In 1 Shot </label>
      <input
        type="number"
        class="form-control"
        v-model="pieceNo"
        placeholder="Enter No of Pieces Produced..."
      />
    </div>
    <div class="mb-3">
      <label for="pieceRate">Cost Of 1 Piece (₹)</label>
      <select class="custom-select" v-model="pieceRate">
            <option selected value="">Select Price Of Piece</option>
            <option value="1.01">₹1.01</option>
          </select>
    </div>
    <div class="mb-3">
      <label for="units">Electricity (Units)</label>
      <input
        type="number"
        class="form-control"
        v-model="units"
        placeholder="Enter No Of Units Consumed..."
      />
    </div>
    <div class="mb-3">
      <label for="danaRate">Rate Of Raw Material(Dana) (₹)</label>
      <input
        type="number"
        class="form-control"
        v-model="danaRate"
        placeholder="Enter No Of Units Consumed..."
      />
    </div>
    <div class="mb-3">
      <label for="extra">Extra (Including Maintenance and Bike) (₹)</label>
      <input
        type="number"
        class="form-control"
        v-model="extra"
        placeholder="Enter Here..."
      />
    </div>
    <div class="mb-3">
      <label for="unitsCost">Cost Of 1 Unit (₹)</label>
      <select class="custom-select" v-model="unitsCost">
            <option selected value="">Select Price...</option>
            <option value="6.50">₹6.50</option>
            <option value="5.80">₹5.80</option>
          </select>
    </div>
    <div class="mb-3">
      <label for="labour">Labour Charge (₹)</label>
      <input
        type="number"
        class="form-control"
        v-model="labour"
        placeholder="Enter Labour's One Day Cost..."
      />
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary mr-3" @click.prevent="submitSingle">
        Find Profit
      </button>
      <button class="btn btn-danger cls" @click.prevent="clrForm">Clear Fields</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SingleForm",
  data(){
    return {
      name : null,
      weight : null,
      shotNo : null,
      pieceNo : null,
      pieceRate : null,
      units : null,
      danaRate : null,
      extra : null,
      unitsCost : null,
      labour : null,
    }
},
  methods: {
    submitSingle(){
      const data = {
        name  : this.name,
        weight : this.weight,
        shotNo : this.shotNo,
        pieceNo : this.pieceNo,
        pieceRate : this.pieceRate,
        units : this.units,
        danaRate : this.danaRate,
        extra : this.extra,
        unitsCost : this.unitsCost,
        labour : this.labour
      }
      this.$emit('submitted', data)
    },
    clrForm(){
      this.name = null
      this.weight = null
      this.shotNo = null
      this.pieceNo = null
      this.pieceRate = null
      this.units = null
      this.danaRate = null
      this.extra = null
      this.unitsCost = null
      this.labour = null
    }
  },
};
</script>
