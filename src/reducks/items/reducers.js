import initialState from "../store/initialState";


export const ItemReducer = (state = initialState.items, action)=>{
    switch(action.type){
        case 'FETCH_ITEM':
            return {
                ...state,
                list : action.payload
            }
            default:
                return state
    }
}
 
