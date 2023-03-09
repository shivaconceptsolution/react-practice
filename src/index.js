import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import PropsExample from './PropsExample';
import Operation from './Operation';
import Calculator from './Calculator';
import HOCCHILD from './HOCCHILD';
import ListExample from './ListExample';
import ListProps from './ListProps';
import { FetchExample } from './FetchExample';
import { FetchPostAPI } from './FetchPostAPI';
import ReactContextExample from './ReactContextExample';
import Reactcontextnew from './Reactcontextnew';

//var x = [101,"C","Hello",false,12.345]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
