import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class tabNavOut extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className='tabNavOut clearfix'>
        		<ul>
        			<li className={ this.props.tabNavFlag === 4 ? 'active' : ''} onClick={this.props._clickHandleTabNav0}>全部</li>
        			<li className={ this.props.tabNavFlag === 1 ? 'active' : ''} onClick={this.props._clickHandleTabNav1}>待处理</li>
        			<li className={ this.props.tabNavFlag === 2 ? 'active' : ''} onClick={this.props._clickHandleTabNav2}>已完成</li>
        		</ul>
        	</div>
        )
    }
}

export default tabNavOut