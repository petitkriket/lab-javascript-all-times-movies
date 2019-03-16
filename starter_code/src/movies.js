/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  updatedMoviesArray = [];

  array.map(movie => {
    //get the hour position
    var hourCount = movie.duration.indexOf("h");
    hourCount = movie.duration.slice(0, hourCount) * 60;

    // get the minute
    var minutesCount = movie.duration.slice(3, movie.duration.length);
    minutesCount = parseInt(minutesCount, 10);
    // removes min string
    //let duration = hourCount + minutesCount;
    if (movie.duration.includes("h")) {
      duration = hourCount + minutesCount;
    } else {
      duration = hourCount;
    }

    var tmpMovieObject = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: duration,
      genre: movie.genre,
      rate: movie.rate
    };

    // push the updated object inside a new array
    updatedMoviesArray.push(tmpMovieObject);
  });

  //console.log(updatedMoviesArray, "new array");
  return updatedMoviesArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  sumOfRates = 0;
  // sum all rates  and divide them by # movies
  array.map(movie => {
    sumOfRates += parseFloat(movie.rate);
  });

  //
  avgRatings = sumOfRates / array.length;
  return Math.round(avgRatings * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  // filter dramas only
  let dramaMovies = array.filter(movie => {
    return movie.genre.includes("Drama") && movie.rate !== "";
  });

  // empty fallback
  if (dramaMovies.length === 0) {
    return undefined;
  }

  // use previous function (DRY)
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(array) {
  moviesArray = turnHoursToMinutes(array);

  // sort asc duration or using title when equivalence found
  moviesArray.sort((a, b) =>
    a.duration > b.duration
      ? 1
      : a.duration === b.duration
      ? a.title > b.title
        ? 1
        : -1
      : -1
  );
  console.log(moviesArray);

  return moviesArray;
}
// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
