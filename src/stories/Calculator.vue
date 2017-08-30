<template>
  <div class="container">
    <h1> Type 2 numbers and chose an operation. </h1>
    <form @submit.prevent="calculate" class="form-inline">
      <input v-model.number="a" @keyup.enter="calculate" class="form-control">
      <select v-model="operator" class="form-control">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input v-model.number="b" @keyup.enter="calculate" class="form-control">
      <button type="submit" @click="calculate" class="btn btn-primary">
        Calculate
      </button>
    </form>
    <h2> Result: {{a}} {{operator}} {{b}} = {{c}}</h2>
  </div>
</template>
<script>
  export default {
    name: 'Calculator',
      data () {
        return {
          a: 1,
          b: 2,
          c: null,
          operator: "+",
        }
          },
        methods: {
          calculate: function(){
            switch (this.operator){
              case "+":
                this.c = this.a + this.b
                break;
              case "-":
                this.c = this.a - this.b
                break;
              case "*":
                this.c = this.a * this.b
                break;
              case "/":
                this.c = this.a / this.b
                break;
            }
        }
      }
    }
</script>