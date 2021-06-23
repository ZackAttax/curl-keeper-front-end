export const createUser = (user) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(user => {
        if (user.message) {
            //alert.user.message
        } else {
            localStorage.setItem("token", user.token)
            dispatch({type: 'CREATE_USER', payload: user})
        }
    })
    .catch(err => alert(err))
    }
}
