const API = "http://localhost:3000"

export const updateUser = (id) => {
    return dispatch => {
        fetch(API + `/users/${id}`)
        .then(resp => resp.json())
        .then(user => dispatch({
            type: "CREATE_USER",
            payload: user
        })
    )}
}