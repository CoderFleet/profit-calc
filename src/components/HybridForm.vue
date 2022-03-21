<template>
  <form class="mainForm">
    <div class="mb-3">
      <label for="weight">Weight Of Waste In 1 Shot</label>
      <input
        type="number"
        class="form-control"
        v-model="runnerWeight"
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
      <div class="card-group">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <label for="shotNo">Quantity In Mould</label>
            <input
              type="number"
              class="form-control"
              v-model="q1"
            />
            <label for="shotNo">Rate</label>
            <input
              type="number"
              class="form-control"
              v-model="r1"
            />
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <label for="shotNo">Quantity In Mould</label>
            <input
              type="number"
              class="form-control"
              v-model="q2"
            />
            <label for="shotNo">Rate</label>
            <input
              type="number"
              class="form-control"
              v-model="r2"
            />
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <label for="shotNo">Quantity In Mould</label>
            <input
              type="number"
              class="form-control"
              v-model="q3"
            />
            <label for="shotNo">Rate</label>
            <input
              type="number"
              class="form-control"
              v-model="r3"
            />
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <label for="shotNo">Quantity In Mould</label>
            <input
              type="number"
              class="form-control"
              v-model="q4"
            />
            <label for="shotNo">Rate</label>
            <input
              type="number"
              class="form-control"
              v-model="r4"
            />
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <label for="shotNo">Quantity In Mould</label>
            <input
              type="number"
              class="form-control"
              v-model="q5"
            />
            <label for="shotNo">Rate</label>
            <input
              type="number"
              class="form-control"
              v-model="r5"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="shotWeight">Weight Of 1 Shot</label>
      <input
        type="number"
        class="form-control"
        v-model="shotWeight"
        placeholder="Enter Weight Of Handle..."
      />
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
      <button
        type="submit"
        class="btn btn-primary mr-3"
        @click.prevent="submitHybrid"
      >
        Find Profit
      </button>
      <button class="btn btn-danger cls" @click.prevent="clrForm">
        Clear Fields
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HybridForm',
  data(){
    return{
      runnerWeight : 0,
      shotNo : 0,
      q1 : 0,
      r1 : 0,
      q2 : 0,
      r2 : 0,
      q3 : 0,
      r3 : 0,
      q4 : 0,
      r4 : 0,
      q5 : 0,
      r5 : 0,
      shotWeight : 0,
      units : 0,
      danaRate : 0,
      extra : 0,
      unitsCost : 0,
      labour : 0,
    }
  },
  methods : {
    submitHybrid(){
      const data = {
        runnerWeight : this.runnerWeight,
        shotNo : this.shotNo,
        q1 : this.q1,
        r1 : this.r1,
        q2 : this.q2,
        r2 : this.r2,
        q3 : this.q3,
        r3 : this.r3,
        q4 : this.q4,
        r4 : this.r4,
        q5 : this.q5,
        r5 : this.r5,
        shotWeight : this.shotWeight,
        units : this.units,
        danaRate : this.danaRate,
        extra : this.extra,
        unitsCost : this.unitsCost,
        labour : this.labour
      }
      this.$emit('submitted', data)
    }
  }
}
</script>