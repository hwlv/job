import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {counter, addGun, removeGun, addGunAsync} from './index.redux'
import {Provider} from 'react-redux';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// const store=createStore(counter,applyMiddleware(thunk))
/**
 * 用来方便浏览器redux插件调试
 * @type {Store<any & any> & any}
 */
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
// <App addGun={addGun} addGunAsync={addGunAsync} removeGun={removeGun}/>
ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root'))
// store.subscribe(render)
// registerServiceWorker();
