import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SceneOrderStatusActionsFormOtherFile from '../../../actions/sceneOrder.js'

class Tab extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	status: 3
        }
    }
    render() {
        return (
        	<div className= 'tabNav clearfix'>
        		<ul>
        			<li className={ this.state.status == 3 ? 'active' : ''} onClick={this._handleTabClick3.bind(this)}>全部</li>
        			<li className={ this.state.status == 0 ? 'active' : ''} onClick={this._handleTabClick0.bind(this)}>待付款</li>
        			<li className={ this.state.status == 1 ? 'active' : ''} onClick={this._handleTabClick1.bind(this)}>已付款</li>
        			<li className={ this.state.status == 2 ? 'active' : ''} onClick={this._handleTabClick2.bind(this)}>已完成</li>
        		</ul>
        	</div>
        )
    }
    componentDidMount() {
    	const status = this.props.sceneStatus.orderTabStatus
    	console.log(status)
    	this.setState({
    		status: status
    	})
    }
    _handleTabClick3() {
    	this.setState({
    		status: 3
    	})
    	this.props.sceneOrderStatusActions.changeSceneTabNav(3)
        const tab = this.props.tabClick
        tab();
    }
    _handleTabClick0() {

    	this.setState({
    		status: 0
    	})
    	this.props.sceneOrderStatusActions.changeSceneTabNav(0)
        const tab = this.props.tabClick
        tab();
    }
    _handleTabClick1() {

    	this.setState({
    		status: 1
    	})
    	this.props.sceneOrderStatusActions.changeSceneTabNav(1)
        const tab = this.props.tabClick
        tab();
    }
    _handleTabClick2() {

    	this.setState({
    		status: 2
    	})
    	this.props.sceneOrderStatusActions.changeSceneTabNav(2)
        const tab = this.props.tabClick
        tab();
    }

}

// export default Tab
function mapStateToProps(state) {
    return {
        sceneStatus: state.sceneStatus
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sceneOrderStatusActions : bindActionCreators(SceneOrderStatusActionsFormOtherFile,dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)