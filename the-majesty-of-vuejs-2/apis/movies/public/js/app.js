Vue.component('movie', {
  template: '#template-movie-raw',
  props: ['movie'],
  methods: {
    deleteMovie: function(movie) {
      var index = this.$parent.movies.indexOf(movie);
      this.$parent.movies.splice(index, 1)
      axios.delete('api/movies/' + movie.id, movie)
    },
    editMovie: function(movie) {
      movie.editing = true;
    },
    updateMovie: function(movie) {
      axios.patch('api/movies/' + movie.id, movie)
      movie.editing = false;
    },
    storeMovie: function(movie) {
      axios.post('api/movies/', movie).then(function (response) {
        // vm.fetchMovies();
        Vue.set(movie, 'id', response.data.id);
        movie.editing = false;
      });
    },
  }
})

new Vue({
  el: '#v-app',
  data: {
    movies: [],
    movie: {} },
  mounted: function (){
    this.fetchMovies()
  },
  methods: {
    createMovie: function () {
      var newMovie = {
        title: "",
        director: "",
        editing: true
      };
      this.movies.push(newMovie);
    },
    fetchMovies: function () {
      var vm = this;
      axios.get('/api/movies')
        .then(function (response) {
          var moviesReady = response.data.map(function (movie) {
            movie.editing = false;
            return movie
          })
          Vue.set(vm, 'movies', moviesReady)
        });
    },
  }
});