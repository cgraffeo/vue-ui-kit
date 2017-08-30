<template>
  <div class="container">
    <h1> Type 2 numbers and chose an operation. </h1>
    <form class="form-inline">
      <input v-model.number="a" class="form-control">
      <select v-model="operator" class="form-control">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input v-model.number="b" class="form-control">
    </form>
    <h2> Result: {{a}} {{operator}} {{b}} = {{c}}</h2>
  </div>
</template>
<script>
  export default {
    name: 'ComputedCalc',
      data () {
        return {
          a: 1,
          b: 2,
          operator: "+",
        }
          },
        computed: {
          c: function () {
            switch (this.operator) {
              case "+":
                return this.a + this.b
                break;
              case "-":
                return this.a - this.b
                break;
              case "*":
                return this.a * this.b
                break;
              case "/":
                return this.a / this.b
                break;
            }
        }
      }
    }
</script>