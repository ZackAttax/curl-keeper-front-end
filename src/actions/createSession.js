export const createSession = (user) => {

    return (dispatch) => {
         fetch('http://localhost:3000/sessions', {
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             method: 'POST',
             body: JSON.stringify({user})
         })
         .then(resp => resp.json())
         .then(user => dispatch({type: 'CREATE_USER', payload: user}))
         .catch(err => console.log(err))
    }
}