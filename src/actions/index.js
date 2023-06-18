// {
//     type : 'ADD_MOVIES',
//     movies : [m1, m2, m3]
// }
// {
//     type :  'DECREASE_COUNT'
// }
// These types of variables are called as action variables 
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export function addMovies(movies) {
    // if u want to return this object to multiple places then return it by fn it is easier for u in react
    return {
        type: 'ADD_MOVIES',
        // since movie key and value are same so we are using only one variable
        movies
      }
}

export function addFavourite(movie) {
    // if u want to return this object to multiple places then return it by fn it is easier for u in react
    return {
        type: ADD_FAVOURITE,
        // since movie key and value are same so we are using only one variable
        movie
      }
}