const initialDaysState = {
    days: []
}

 const daysReducer = (state=initialDaysState, action) => {

    switch (action.type){
        case "SET_DAYS":
            return {...state, days: action.payload}
        default:
            return state
    }

}

export default daysReducer
