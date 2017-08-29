<div class="container">
  <h1>Multiplication table of 4</h1>
  <ul class="list-group">
    <li v-for="i in 11" class="list-group-item">
      {{ i-1 }} times 4 equals {{ (i-1) * 4 }}.
    </li>
  </ul>
</div>

<script>
  export default {
    name: 'StaticMultiplication'
  }
</script>