import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
let speed = '';
let passengers;

// const reducerInitialState = {
//     dashboard: {
//         speed: '',
//         passengers: ''
//     }
// }

const myReducer = (state = { speed: 0, passengers }, action) => {
    console.log('in myReducer:', action);
    if(action.type === 'speedUp'){
        state = {...state, speed: Number(state.speed) +1};
    }
    if(action.type === 'speedDown'){
        state = {...state, speed: Number(state.speed) -1};
    }
    if(action.type === 'passengers'){
        state={...state,
        passengers: [...state.passengers, action.payload]
        }
    }
    return state;
}
    

// use reducer in store
const storeInstance = createStore(myReducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
