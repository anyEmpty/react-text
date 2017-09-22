import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class tab extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="tab clearfix">
            	<button className={ this.props.tabFlag === 0 ? 'active' : ''} onClick={this.props._clickHandleRec}>进货单</button>
            	<button className={ this.props.tabFlag === 1 ? 'active' : ''} onClick={this.props._clickHandleOut}>出货单</button>
        	</div>
        )
    }
}

export default tab