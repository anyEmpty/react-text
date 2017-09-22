import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as openSceneTypeActionsFormOtherFile from '../../../actions/openScene.js'
class Tab extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="tab clearfix">
        		<ul>
        			<li className={ this.state.tabStatus === 5 ? 'active' : ''} onClick={this._clickHandleTabNav0.bind(this)}><span>全部</span></li>
        			<li className={ this.state.tabStatus === 1 ? 'active' : ''} onClick={this._clickHandleTabNav1.bind(this)}><span>全额支付</span></li>
        			<li className={ this.state.tabStatus === 2 ? 'active' : ''} onClick={this._clickHandleTabNav2.bind(this)}><span>预定金</span></li>
        			<li className={ this.state.tabStatus === 3 ? 'active' : ''} onClick={this._clickHandleTabNav3.bind(this)}><span>现场付</span></li>
        			<li className={ this.state.tabStatus === 4 ? 'active' : ''} onClick={this._clickHandleTabNav4.bind(this)}><span>0元场景</span></li>
        		</ul>
            </div>
        )
    }
    componentWillMount() {
    	const tabStatus = this.props.openSceneType.tabStatus
    	this.setState({
    		tabStatus: tabStatus
    	})
    }
    _clickHandleTabNav0() {
    	this.setState({
    		tabStatus: 5
    	})
    	this.props.openSceneTypeActions.changeOpenSceneType(5)

    	const tabClick = this.props.tabClick
    	tabClick();
    }
    _clickHandleTabNav1() {
    	this.setState({
    		tabStatus: 1
    	})
    	this.props.openSceneTypeActions.changeOpenSceneType(1)
    	const tabClick = this.props.tabClick
    	tabClick();
    }
    _clickHandleTabNav2() {
    	this.setState({
    		tabStatus: 2
    	})
    	this.props.openSceneTypeActions.changeOpenSceneType(2)
    	const tabClick = this.props.tabClick
    	tabClick();
    }
    _clickHandleTabNav3() {
    	this.setState({
    		tabStatus: 3
    	})
    	this.props.openSceneTypeActions.changeOpenSceneType(3)
    	const tabClick = this.props.tabClick
    	tabClick();
    }
    _clickHandleTabNav4() {
    	this.setState({
    		tabStatus: 4
    	})
    	this.props.openSceneTypeActions.changeOpenSceneType(4)
    	const tabClick = this.props.tabClick
    	tabClick();
    }
}

function mapStateToProps(state) {
    return {
        openSceneType: state.openScene
    }
}
function mapDispatchToProps(dispatch) {
    return {
        openSceneTypeActions : bindActionCreators(openSceneTypeActionsFormOtherFile,dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)