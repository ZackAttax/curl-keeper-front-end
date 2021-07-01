const API = "http://localhost:3000"

export const createDay = (day) => {
    console.log("createday")
    return dispatch => {
        fetch(API + "/days",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({day})
        })
        .then(resp => resp.json())
        .then(days => dispatch({
            type: "SET_DAYS",
            payload: days
        })
    )}
}
//const setDays = { type: "SET_DAYS", payload: monday}