import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './Routes'

render(
<AppContainer>{Routes}</AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./Routes', () => {
        const NextApp = require('./Routes').default;
    render(
    <AppContainer>{NextApp}</AppContainer>,
        document.getElementById('root')
    );
    });
}