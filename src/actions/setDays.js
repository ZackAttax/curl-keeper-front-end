const API = "http://localhost:3000"

export const setDays = () => {
    console.log("fetchdays")
    return dispatch => {
        fetch(API + "/days")
        .then(resp => resp.json())
        .then(days => dispatch({
            type: "SET_DAYS",
            payload: days
        })
    )}
}