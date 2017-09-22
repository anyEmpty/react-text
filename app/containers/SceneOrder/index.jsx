import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import './style.less'
import OrderType from './subpage/orderType.jsx'
import Tab from './subpage/tab.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SceneOrderStatusActionsFormOtherFile from '../../actions/sceneOrder.js'

import { getData } from '../../fetch/sceneOrderList/text.js'
import SceneOrderList from '../../components/sceneOrderList'
import Loading from '../../components/Loading'
class SceneOrder extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	orderTypeShow: false,
            hasMore: false,
            isLoadIngMore: false,
            page: 1,
        	data: []
        }
    }
    render() {
        return (
            <div id="sceneOrder">
            	<Header title='场景套餐售卖订单' control1={true} control2={true} orderType={this._orderTypeControl.bind(this)}/>
            	{
            		this.state.orderTypeShow
            		? <OrderType changeOrderShow={this._changeOrderShow.bind(this)} typeClick={this._handleTypeClick.bind(this)}/>
            		: ''
            	}
            	<Tab tabClick={this._handleTabClick.bind(this)}/>
            	<div className="containerBox" ref="container">
	                {
	                    this.state.data.length
	                    ? <SceneOrderList data={this.state.data}  hasMore={this.state.hasMore} 
	                    isLoadIngMore={this.state.isLoadIngMore} loadIngMoreFn={this.loadMoreData.bind(this)}
	                    containerBox={this.state.containerBox} />
	                    : <Loading/>
	                }
            	</div>
            </div>
        )
    }
    _handleTypeClick() {
    	this.setState({
    		page: 1,
    		data:[]
    	})
        const orderTypeStatus = this.props.sceneStatus.orderTypeStatus
        const orderTabStatus = this.props.sceneStatus.orderTabStatus
        const result = getData(orderTypeStatus,orderTabStatus,0)
        this._resultHandle(result)
    }
    _handleTabClick() {
    	this.setState({
    		page: 1,
    		data:[]
    	})
        const orderTypeStatus = this.props.sceneStatus.orderTypeStatus
        const orderTabStatus = this.props.sceneStatus.orderTabStatus
        const result = getData(orderTypeStatus,orderTabStatus,0)
        this._resultHandle(result)
    }
    loadMoreData(){
        this.setState({
            isLoadIngMore : true
        })
        const page = this.state.page
        const orderTypeStatus = this.props.sceneStatus.orderTypeStatus
        const orderTabStatus = this.props.sceneStatus.orderTabStatus
        const result = getData(orderTypeStatus,orderTabStatus,page)
        this._resultHandle(result)
        this.setState({
            isLoadIngMore:false,
            page: this.state.page + 1
        })
    }
    _orderTypeControl() {
    	this.setState({
    		orderTypeShow: !this.props.sceneStatus.orderTypeShow
    	})
		this.props.sceneOrderStatusActions.changeSceneTypeShow(!this.props.sceneStatus.orderTypeShow)
    }
    componentWillMount() {
    	this.props.sceneOrderStatusActions.updatesceneOrder({
        	orderTypeStatus:4,
        	orderTabStatus:3,
        	orderTypeShow: false,
        	data:this.state.data
    	})
    }
    _changeOrderShow(){
    	this.setState({
    		orderTypeShow: false
    	})
    }
    componentDidMount() {
    	let result = getData(4,3,0)
    	this._resultHandle(result)
        this.setState({
            containerBox: this.refs.container
        })
    }
    _resultHandle(result){
        result.then( res => {
            return res.json()
        }).then( json => {
            this.setState({
                data: json.data.data.concat(this.state.data),
                hasMore: json.data.hasMore
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error(ex)
            }
        })
    }
}

// export default SceneOrder
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
)(SceneOrder)