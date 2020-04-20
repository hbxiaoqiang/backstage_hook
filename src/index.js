import React from 'react';
import ReactDOM from 'react-dom';
import App from './constainers/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GlobalStyle } from './style';
import 'weui';

ReactDOM.render(
    <Provider store={store}>
         <GlobalStyle />
            <App />
    </Provider>
    , document.getElementById('root'));
