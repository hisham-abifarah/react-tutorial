
// param state is the current or old state , starts as an empty object
export default function (state = {}, action) {

    switch (action.type) {
        case 'MOVIES_LIST':
        // ...state : old state , this line updates state inside redux
            return {...state , movies:action.payload}  

        default: return state;
    }
}