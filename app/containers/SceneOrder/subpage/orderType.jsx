import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SceneOrderStatusActionsFormOtherFile from '../../../actions/sceneOrder.js'
class OrderType extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	orderTypeStatus: 4,
        	orderTypeShow: false

        }
    }
    render() {
        return (
            <div id="orderType">
            	<div className="container">
            		<ul className="clearfix">
            			<li><span className={this.state.orderTypeStatus == '4' ? 'active' :''} onClick={this._handleClick4.bind(this)}>全部</span></li>
            			<li><span className={this.state.orderTypeStatus == '0' ? 'active' :''} onClick={this._handleClick0.bind(this)}>全额支付</span></li>
            			<li><span className={this.state.orderTypeStatus == '1' ? 'active' :''} onClick={this._handleClick1.bind(this)}>预定金</span></li>
            			<li><span className={this.state.orderTypeStatus == '2' ? 'active' :''} onClick={this._handleClick2.bind(this)}>现场付</span></li>
            			<li><span className={this.state.orderTypeStatus == '3' ? 'active' :''} onClick={this._handleClick3.bind(this)}>0元场景</span></li>
            		</ul>
            	</div>
            </div>
        )
    }
    componentDidMount() {
    	const status = this.props.sceneStatus.orderTypeStatus
    	const orderTypeShow = this.props.sceneStatus.orderTypeShow
    	this.setState({
    		orderTypeStatus: status,
    		orderTypeShow: orderTypeShow
    	})
    }
    _handleClick4(){
    	const changeOrderShow = this.props.changeOrderShow
    	this.setState({
    		orderTypeStatus: 4
    	})
    	this.props.sceneOrderStatusActions.changeSceneType(4)

    	this.props.sceneOrderStatusActions.changeSceneTypeShow(false)
    	setTimeout(() => {
    		changeOrderShow();
            const typeClick = this.props.typeClick
            typeClick()
    	},300)
    }
    _handleClick0(){

    	const changeOrderShow = this.props.changeOrderShow
    	this.setState({
    		orderTypeStatus: 0
    	})
    	this.props.sceneOrderStatusActions.changeSceneType(0)
    	this.props.sceneOrderStatusActions.changeSceneTypeShow(false)
    	setTimeout(() => {
    		changeOrderShow()
            const typeClick = this.props.typeClick
            typeClick()
    	},300)
    }
    _handleClick1(){

    	const changeOrderShow = this.props.changeOrderShow
    	this.setState({
    		orderTypeStatus: 1
    	})
    	this.props.sceneOrderStatusActions.changeSceneType(1)
    	this.props.sceneOrderStatusActions.changeSceneTypeShow(false)
    	setTimeout(() => {
    		changeOrderShow()
            const typeClick = this.props.typeClick
            typeClick()
    	},300)
    }
    _handleClick2(){

    	const changeOrderShow = this.props.changeOrderShow
    	this.setState({
    		orderTypeStatus: 2
    	})
    	this.props.sceneOrderStatusActions.changeSceneType(2)
    	this.props.sceneOrderStatusActions.changeSceneTypeShow(false)
    	setTimeout(() => {
    		changeOrderShow()
            const typeClick = this.props.typeClick
            typeClick()
    	},300)
    }
    _handleClick3(){

    	const changeOrderShow = this.props.changeOrderShow
    	this.setState({
    		orderTypeStatus: 3
    	})
    	this.props.sceneOrderStatusActions.changeSceneType(3)
    	this.props.sceneOrderStatusActions.changeSceneTypeShow(false)
    	setTimeout(() => {
    		changeOrderShow()
            const typeClick = this.props.typeClick
            typeClick()
    	},300)
    }
}

// export default OrderType
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
)(OrderType)