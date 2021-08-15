const initialState = {
    count: 0,
}

const countReducer = (state = initialState, action) => {
    switch(action){
        case 'INC':
            return {
                count: action.payload
            }
        case 'GET':    
            return {
                ...state
            }
        default:
            return state
    }
} 



export default countReducer;
