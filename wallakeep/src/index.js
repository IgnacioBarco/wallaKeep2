/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './components/App/App';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

import { configureStore } from '../src/store'

const store = configureStore();

console.log('creamos el store');
console.log(store);

// Forzar el modo producción
const app = <SnackbarProvider maxSnack={2}>
    <App />
</SnackbarProvider>

ReactDOM.render(app, document.getElementById('root'));