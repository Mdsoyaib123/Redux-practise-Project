// state-count:0 
// action-increment,decrement,reset
// reducer- handle logic
// store 
const {createStore} = require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const intialState ={
    count:0
}

const IncrementAction =()=>{
return {
    type:INCREMENT
}
}
const DecrementAction =()=>{
return {
    type:DECREMENT
}
}
const ResetAction= ()=>{
    return {
        type:RESET
    }
}

const reducer = (state=intialState,action)=>{
switch(action.type){
    case INCREMENT:
        return{
            ...state,
            count: state.count + 1  
        }
    case DECREMENT:
        return {
            ...state,
            count:state.count-1
        }
    case RESET:
        return{
            ...state,
            count:0
        }
}
}

const store = createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(IncrementAction())
store.dispatch(IncrementAction())
store.dispatch(IncrementAction())
store.dispatch(IncrementAction())
store.dispatch(IncrementAction())
store.dispatch(IncrementAction())
store.dispatch(DecrementAction())
store.dispatch(DecrementAction())