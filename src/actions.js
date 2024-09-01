import  {
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    CHANGE_SEARCH_FIELD
} from './constants'


export const setSearchField = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload: text   
})

export const requestRobots = () => (dispatch) => {
    dispatch ({type: REQUEST_ROBOTS_PENDING});
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

