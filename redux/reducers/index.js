import * as actionTypes from '../actions/actionTypes'

const initialState = {
    text: '',
}

const dummyReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        
        case actionTypes.ACTION_TYPE:
            return { ...state, text: action.payload.data }

        default:
            return state;
    }

}

export default dummyReducer