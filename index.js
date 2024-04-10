// state-count:0 
// action-increment,decrement,reset
// reducer- handle logic
// store 
const {createStore} = require('redux')

const ADD_USER='ADD_USER'

const intialState ={
    count:1,
    user:['anis']
}


const add_userAction =(value)=>{
return {
    type:ADD_USER,
    payload:value
}
}
const UserReducer = (state=intialState,action)=>{
switch(action.type){
   
    case ADD_USER:
        return{
            
            user:[...state.user, action.payload],
            count:state.count + 1 
        }
   
}
}

const store = createStore(UserReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(IncrementAction())
// store.dispatch(IncrementAction())
// store.dispatch(IncrementAction())
// store.dispatch(IncrementAction())
// store.dispatch(IncrementAction())
// store.dispatch(IncrementAction())
// store.dispatch(DecrementAction())
// store.dispatch(DecrementAction())
// store.dispatch(IncrementByValueAction(5))
// store.dispatch(IncrementByValueAction(5))
store.dispatch(add_userAction('sourav'))
store.dispatch(add_userAction('rafi'))
store.dispatch(add_userAction('fahim'))