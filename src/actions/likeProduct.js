const API = "http://localhost:3000"

export const likeProduct = (day) => {
    return dispatch => {
        fetch(API + `/day${day.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({day})
        })
        .then(resp => resp.json())
        .then(days => dispatch({
            type: "LIKE_PRODUCT",
            payload: days
        })
    )}
}