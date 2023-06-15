// Here we are writing the reducers fn
// Here state = [] is the default state
export default function movies (state = [], action) {
    if (action.type === 'ADD_MOVIES') {
        // We simply gives the new state to store which will merge it with prev. state
        return action.movies;
    }
    return state;
}