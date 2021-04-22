const initialState = {
    messages: [],
    tchatUsers: []
}
function tchatReducer(state = initialState, action) {
    console.log(action.type);
    switch(action.type) {
        case 'ADD_USER':return {...state, tchatUsers:[...state.tchatUsers,action.value]};
        case 'ADD_USERS':return {...state, tchatUsers:[...state.tchatUsers,...action.values]};
        case 'ADD_MESSAGE':return {...state, tchatUsers:[...state.messages,...action.values]};;
        default: return state;
    }
}

let state=initialState;
console.log(state);
state=tchatReducer(state,{type:'ADD_USERS',values:[{login:'alex'},{login:'josé'}]})
console.log(state);
state=tchatReducer(state,{type:'ADD_USERS',values:[{login:'pascal'},{login:'dominique'}]})
console.log(state);