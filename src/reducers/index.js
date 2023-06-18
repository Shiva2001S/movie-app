import { ADD_MOVIES, ADD_FAVOURITE } from '../actions';
// Here we are writing the reducers fn
// Here state = [] is the default state
// export default function movies (state = [], action) {
//     // if (action.type === 'ADD_MOVIES') {

//     // Instead of using the string always try to use variables bcz it helps tp update that string multiple places at one time 
//     if (action.type === ADD_MOVIES) {
//         // We simply gives the new state to store which will merge it with prev. state
//         return action.movies;
//     }
//     return state;
// }

const initialMoviesState = {
    list : [],
    favourites : []
}
export default function movies (state = initialMoviesState, action) {
    // if (action.type === 'ADD_MOVIES') {

    // Instead of using the string always try to use variables bcz it helps tp update that string multiple places at one time 
    // if (action.type === ADD_MOVIES) {
    //     // We simply gives the new state to store which will merge it with prev. state
    //     return {
    //         // By this we are returning the prev state of our state
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                // It will update the list of prev state.list
                list : action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites : [action.movie, ...state.favourites]
            } 
        default:
            return state;
    }
}