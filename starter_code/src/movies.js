/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint no-restricted-globals: 'off' */

/*
Practice Javascript advance methods
Use map, reduce, filter and sort to manipulate arrays


*/
// Create a turnHoursToMinutes method that receive an array as parameter,
// replace the duration info of each of the movies for it equivalent in minutes.
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  var updatedMovies = [];
  var formatedTime = array.map(function (movie) {

    // taking 1st char, remove 1st char from rest and glue
    var hours = Number(movie.duration.slice(0, movie.duration.indexOf('h')));
    var min = Number(movie.duration.slice(2, movie.duration.indexOf('m')));

    // in case a movies is < 60 minutes (h not inside the string)
    if (isNaN(hours)) {
      hours = 0;
      min = Number(movie.duration.slice(0, movie.duration.indexOf('m')));
    }
    // total duration in minutes
    var newDuration = hours * 60 + min;

    // creating new object to push into brother movies array
    // COURSELINK objects use {} AND arrays [] ERREUR tmpMovieObject = [{}]
    // COMPARE
    //
    var tmpMovieObject = { // {[]}
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: newDuration,
      genre: movie.genre,
      rate: movie.rate
    };
    updatedMovies.push(tmpMovieObject);

    // returning duration number
    return formatedTime;
  });

  // return freshly remapped object enclosing map() into a var
  return updatedMovies;
}


// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var result = array.reduce(function (sum, movie) {
    return (sum += parseFloat(Number(movie.rate).toFixed(2)));
  }, 0);
  return result / array.length;
}

/*
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}

*/
// Get the average of Drama Movies
/*
Iteration 3: Drama movies
Create a dramaMoviesRate that receive an array as a parameter to get the average rate of all drama movies!
*/
function dramaMoviesRate(array) {
  // unrated movies should be removed from the average to be more precise
  var unratedDramaMovies = 0;
  var numberOfDramasMovies = 0;
  // adding all dramas ratings and divising the result by number of dramas
  var sumOfDramasRatings = array.reduce(function (sum, movie) {
    if (array === undefined || array.length === 0) {
      return undefined;
    }

    // selecting ony dramas by looping into genres
    movie.genre.forEach(function (tag) {
      if (tag === 'Drama') {
        // set unrated movies rate to 0
        if (movie.rate === undefined || movie.rate === null || movie.rate === '') {
          unratedDramaMovies++;
          movie.rate = 0;
        }
        // counting total number of dramas
        numberOfDramasMovies++;

        // adding it's rating to the sum of ratings
        sum += Number(movie.rate);
      }
    });

    return sum;
  }, 0); // end of reduce

  // return undefined if no drama were found
  if (numberOfDramasMovies === 0) {
    return undefined;
  }
  // doing the average of dramas ratings minus the unrated ones
  // COURSELINK use typeof to check number or string

  // formating it to .00 result and turning it into number again
  // result / #dramas - unratedDramas
  var averageDramaMoviesRatings = (sumOfDramasRatings / numberOfDramasMovies).toFixed(2);
  return Number(averageDramaMoviesRatings);
}

// Order by time duration, in growing order
function orderByDuration(array) {
  // IMO would be better by doing turnHoursToMinutes(array).sort() but testing wont allow it (?)

  // if second item has a longer duration then move it
  var moviesByDuration = array.sort(function (itemA, itemB) {
    if (itemA.duration < itemB.duration) {
      return -1;
    }
    // if items are the same duration and second item title is lexically before then move it
    if (itemA.duration === itemB.duration && (itemA.title.charAt(0) < itemB.title.charAt(0))) {
      return -1;
    }

    return 1;
  });

  // return the sorted array enclosed into  moviesByDuration above
  return moviesByDuration;
}

/**
  it('Should return the element in a single element array', function () {
    expect(orderByDuration([{ duration: 100 }])).toEqual([{ duration: 100 }]);
  });
 */
// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average