import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Header from "../../components/Header"
import Info from './subpage/Info.jsx'
import Content from './subpage/Content.jsx'
class SceneOrderDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div id="sceneorderdetails">
        		<Header title="订单详情" control1={false} control2={false}/>
        		<div className="containerBox">
        			<Info/>
        			<Content/>
        		</div>
        	</div>
        )
    }
}

export default SceneOrderDetails