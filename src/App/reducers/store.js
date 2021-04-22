import {combineReducers, createStore} from 'redux';
import { REST_ADR } from '../config/config';
const initialState = {
    messages: [],
    tchatUsers: []
}
function tchatReducer(state = initialState, action) {
    console.log(action.type);
    if(action.type.includes('@@redux/INIT')){action.type='@@redux/INIT';}
    switch(action.type) {
        case '@@redux/INIT':
            fetch(`${REST_ADR}/messages`).then(f=>f.json()).then(o=>{
                store.dispatch({type:'ADD_MESSAGES',values:o});
            })
        case 'ADD_USER':return {...state, tchatUsers:[...state.tchatUsers,action.value]};
        case 'ADD_USERS':return {...state, tchatUsers:[...state.tchatUsers,...action.values]};
        case 'ADD_MESSAGES':return {...state, tchatUsers:[...state.messages,...action.values]};;
        default: return state;
    }
}

const store = createStore(tchatReducer);
// const store=createStore(combineReducers({tchat: tchatReducer,mangeUser:usersReducer});
// store.getState().tchat.messages
export default store;
store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch({type:'ADD_USERS',values:[{login:'alex'}, {login:'boby'}]});
// store.dispatch({type:'ADD_USERS',values:[{login:'pascal'}, {login:'dominique'}]});
// store.dispatch({type:'ADD_USERS',values:[{login:'pierre yves'}, {login:'j\'ean'}]});

// let state=initialState;
// console.log(state);
// state=tchatReducer(state,{type:'ADD_USERS',values:[{login:'alex'},{login:'josé'}]})
// console.log(state);
// state=tchatReducer(state,{type:'ADD_USERS',values:[{login:'pascal'},{login:'dominique'}]})
// console.log(state);