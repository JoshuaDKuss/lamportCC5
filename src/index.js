import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!

const reducerInitialState = {
    dashboard: {
        speed: '',
        passengers: ''
    }
}

const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer:', action);
    if(action.type === 'speed'){
        speed = action.payload.speed;
        return{...state, speed: speed};
    }
    if(action.type === 'passengers'){
        passengers = action.payload.passengers;
        return{...state, passengers: passengers};
    }
    return state;
}

    

// use reducer in store
const storeInstance = createStore(myReducer);

ReactDOM.render(
    <Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
