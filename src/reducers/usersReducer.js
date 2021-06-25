const initialUsersState = {
    users: {}
}

const usersReducer = (state=initialUsersState, action) => {
    switch (action.type){
        case 'GET_ALL':
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default usersReducer