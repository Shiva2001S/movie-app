import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from '../actions';
// Here we are writing the reducers fn
// Here state = [] is the default state
// export default function movies (state = [], action) {
//     // if (action.type === 'ADD_MOVIES') {

//     // Instead of using the string always try to use variables bcz it helps to update that string multiple places at one time 
//     if (action.type === ADD_MOVIES) {
//         // We simply gives the new state to store which will merge it with prev. state
//         return action.movies;
//     }
//     return state;
// }

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export function movies(state = initialMoviesState, action) {
    // console.log('movies state : ', state);
    // if (action.type === 'ADD_MOVIES') {

    // Instead of using the string always try to use variables bcz it helps to update that string multiple places at one time 
    // if (action.type === ADD_MOVIES) {
    //     // We simply gives the new state to store which will merge it with prev. state
    //     return {
    //         // By this we are returning the prev state of our state
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;

    // Here action is a js object which contains type and the change that needs to be merged with current state
    switch (action.type) {
        case ADD_MOVIES:
            console.log('ADD_MOVIES : ', state);
            return {
                // It helps us to spread the properties of state
                ...state,
                // It will update the list of prev state.list
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                // Here action.movie is a single movie which is made fav.
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            };
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            console.log('ADD_MOVIES state : ', state);
            return {
                ...state,
                list: [action.movie, ...state.list],
            };
        default:
            return state;
    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false
};

export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            console.log('search state : ', state);
            return {
                ...state,
                result: action.movie,
                showSearchResults: true

            }
        case ADD_MOVIES:
        case ADD_MOVIE_TO_LIST:
            console.log('ADD_MOVIES search state : ', state);
            return {
                // It helps us to spread the properties of state
                ...state,
                showSearchResults: false
            }
        default:
            return state;
    }
}

// since createStore only takes one reducer so we have combined 2 states under one state
const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// export default function rootReducer(state = initialRootState, action) {
//     // Now instead of one reducer we have multiple reducers and state under one reducer ie. this reducer
//     return {
//         // movies is managed by movies reducer as earlier
//         movies : movies(state.movies, action),
//         // search is managed by search reducer
//         search : search(state.search, action)
//     }
// }

// redux has given us combineReducer method to combine 2 reducers as we did above already
export default combineReducers({
    // here 1st movies is the name of the property and 2nd movies is the name of the reducer
    // this method calls the movies and search reduers as in rootReducer
    movies: movies,
    search: search
});