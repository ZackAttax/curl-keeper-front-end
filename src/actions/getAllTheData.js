const API = "http://localhost:3000"

export const getAllTheData = () => {
    return dispatch => {
        fetch(API + "/users")
        .then(resp => resp.json())
        .then(users => dispatch({
            type: "GET_ALL",
            payload: users
        })
    )}
}