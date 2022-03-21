<template>
  <h2>Profit 👇</h2>
  <h4>{{ '₹ '+ profit + ' & ' + weight + "kg Runner"}}</h4> 
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profit',
    props: {
        profit: Number,
        weight : {
          type : Number,
          default : 0
        },
    }
}
</script>
