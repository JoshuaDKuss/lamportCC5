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
        speed = action.payload.speed;
        return{...state, speed: Number(state.speed) +1};
    }
    if(action.type === 'speedDown'){
        speed = action.payload.speed;
        return{...state, speed: Number(state.speed) -1};
    }
    if(action.type === 'passengers'){
        passengers.push(action.payload);
        return{...state, passengers: passengers};
    }
    return state;
}

    

// use reducer in store
const storeInstance = createStore(myReducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
