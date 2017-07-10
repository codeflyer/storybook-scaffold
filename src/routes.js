import React from 'react'
import { Route } from 'react-router-dom'
import { About } from './components/pages/About'
import { Home } from './components/pages/Home'
import { PageNotFound } from './components/pages/PageNotFound'

export const routes = (
    <Routes path="/">
        <Home/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="**" component={PageNotFound}/>
    </Routes>
)

