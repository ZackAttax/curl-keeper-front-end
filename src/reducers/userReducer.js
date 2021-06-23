const initialUserState = {
    user: {}, loggedIn: false
}

const userReducer = (state=initialUserState, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default userReducer



// => {
//     switch (action.type) {
//         case 'CREATE_USER':
//             return {...state, user: action.payload}
//         default:
//             return {...state}
//     }
// }