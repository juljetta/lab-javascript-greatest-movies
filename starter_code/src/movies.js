/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var sum = array.reduce((acumulator, value) => {
    return acumulator + parseFloat(value.rate);
  }, 0);
  return parseFloat((sum / array.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  var result = array.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(result);
}
console.log(dramaMoviesRate(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function turnIntoMinutes(duration) {
  var time = duration.split(" ");
  var partsHours = time[0].split("h");
  var partsMinutes = time[1].split("min");
  var hours = Number(partsHours[0]);
  var minutes = Number(partsMinutes[0]);
  return hours * 60 + minutes;
}

function orderByDuration(movies) {
  var orderedMovies = [];
  for (let i = 0; i < movies.length; i++) {
    orderedMovies.push(movies[i]);
  }
  orderedMovies.sort((a, b) => {
    var aMinutes = turnIntoMinutes(a.duration);
    var bMinutes = turnIntoMinutes(b.duration);
    if (aMinutes < bMinutes) {
      return -1;
    }
    if (aMinutes > bMinutes) {
      return 1;
    }
    return 0;
  });
  return orderedMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  var result = movies.filter(
    movie =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return result.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
