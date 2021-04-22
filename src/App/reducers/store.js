import { combineReducers, createStore } from 'redux';
import { REST_ADR } from '../config/config';
export const initialState = {
    messages: [],
    tchatUsers: []
}
export const TCHAT_ACTIONS = Object.freeze({
    ADD_USERS: 'ADD_USERS',
    ADD_USER: 'ADD_USER',
    ADD_MESSAGES: 'ADD_MESSAGES',
    SEND_MESSAGE: 'SEND_MESSAGE'
});
const TCHAT_PRIVATE_ACTIONS = Object.freeze({
    INIT: '@@redux/INIT',
    INIT_PULLING: 'INIT_PULLING',
    PULLING: 'PULLING'
});
function tchatReducer(state = initialState, action) {
    // console.log(action.type);
    if (action.type.includes('@@redux/INIT')) { action.type = TCHAT_PRIVATE_ACTIONS.INIT; }
    switch (action.type) {
        case TCHAT_PRIVATE_ACTIONS.INIT:
            fetch(`${REST_ADR}/messages`).then(f => f.json()).then(o => {
                store.dispatch({ type: TCHAT_ACTIONS.ADD_MESSAGES, values: o });
            });
            fetch(`${REST_ADR}/tchatUsers`).then(f => f.json()).then(o => {
                store.dispatch({ type: TCHAT_ACTIONS.ADD_USERS, values: o });
            })
            setInterval(() => { store.dispatch({ type: TCHAT_PRIVATE_ACTIONS.PULLING }) }, 2000);
            return state;
        case TCHAT_ACTIONS.SEND_MESSAGE:
            fetch(`${REST_ADR}/messages`, {
                method: 'POST',
                body: JSON.stringify(action.value),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(f => { console.log(f) }, f => { console.log(f) })
            return state;
        case TCHAT_PRIVATE_ACTIONS.PULLING:
            let last = 0;
            console.log('pulling')
            state.messages.forEach((e) => { last = e.id > last ? e.id : last; })
            fetch(`${REST_ADR}/messages?id_gte=${last + 1}`)
                .then(f => f.json())
                .then(o => {
                    if (o.length <= 0) return;
                    store.dispatch({ type: TCHAT_ACTIONS.ADD_MESSAGES, values: o })
                });
            return state;
        case TCHAT_ACTIONS.ADD_USER: return { ...state, tchatUsers: [...state.tchatUsers, action.value] };
        case TCHAT_ACTIONS.ADD_USERS: return { ...state, tchatUsers: [...state.tchatUsers, ...action.values] };
        case TCHAT_ACTIONS.ADD_MESSAGES:
            return { ...state, messages: [...state.messages, ...action.values] };
        default: return state;
    }
}

const store = createStore(tchatReducer);
// const store=createStore(combineReducers({tchat: tchatReducer,mangeUser:usersReducer});
// store.getState().tchat.messages
export default store;
store.subscribe(() => {
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