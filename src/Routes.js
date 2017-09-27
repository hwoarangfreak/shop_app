import React from 'react'
import { Route, HashRouter } from 'react-router-dom';
import { Main } from './container/Main'
import { InnerPage } from './components/InnerPage'

export default (
    <HashRouter>
        <div>
            <Route exact path="/" component={Main}/>
            <Route path="/:item" component={InnerPage}/>
        </div>
    </HashRouter>
)