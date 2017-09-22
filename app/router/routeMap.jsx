

import React from 'react'

import { Router, Route, IndexRoute } from 'react-router'


const App = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers').default)
    },'App')
}

const Market_order = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Market-order').default)
    },'Market_order')
}

const NotFound = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/404').default)
    },'NotFound')
}


const marketOrderDetails = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Market-orderDetails/Market-orderDetails.jsx').default)
    },'marketOrderDetails')
}

const SceneOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/SceneOrder').default)
    },'SceneOrder')
}

const sceneorderdetails = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/SceneOrderDetails').default)
    },'sceneorderdetails')
}

const OpenScene = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/OpenScene').default)
    },'OpenScene')
}

class RouterMap extends React.Component {
    render() {
        return (
            <Router history ={ this.props.history }>
                <Route path="/" getComponent={App}>
                    <IndexRoute getComponent={Market_order}/>
                    <Route path='/marketOrderDetails/:id/:status' getComponent={marketOrderDetails}/>
                    <Route path='/scene' getComponent={SceneOrder}/>
                    <Route path='/sceneorderdetails/:id/:status' getComponent={sceneorderdetails}/>
                    <Route path='/openscene' getComponent={OpenScene}/>
                    <Route path='*' getComponent={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap