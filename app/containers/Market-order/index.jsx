import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Tab from './subpage/tab.jsx'
import TabNavRev from './subpage/tabNavRev.jsx'
import TabNavOut from './subpage/tabNavOut.jsx'
import Alert from '../../components/Alert'

import MarketOrderList from '../../components/MarketOrderList/index.jsx'
import './index.less'

import { getRevData } from '../../fetch/MarketOrder/MarketOrderRev.js'


import * as orderStatusActionsFormOtherFile from '../../actions/orderStatus.js'

import Header from '../../components/Header'
class Market_order extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data: [],
            dataCopy: [],
        	tabFlag : 0,
        	tabNavFlag : 4,
            hasMore: false,
            isLoadIngMore: false,
            page: 1,
            alertShow: false
        }
    }
    render() {
        return (
            <div id='market-order'>
                
            	<Header title="市场订单"  control1={false} control2={true}/>
            	<Tab tabFlag = {this.state.tabFlag} _clickHandleRec={this._clickHandleRec.bind(this)} _clickHandleOut={this._clickHandleOut.bind(this)}/>
            	{
            		this.state.tabFlag === 0
            		? <TabNavRev tabNavFlag = {this.state.tabNavFlag} _clickHandleTabNav0={this._clickHandleTabNav0.bind(this)} _clickHandleTabNav1={this._clickHandleTabNav1.bind(this)} _clickHandleTabNav2={this._clickHandleTabNav2.bind(this)} _clickHandleTabNav3={this._clickHandleTabNav3.bind(this)}/>
            		: <TabNavOut tabNavFlag = {this.state.tabNavFlag} _clickHandleTabNav0={this._clickHandleTabNav0.bind(this)} _clickHandleTabNav1={this._clickHandleTabNav1.bind(this)} _clickHandleTabNav2={this._clickHandleTabNav2.bind(this)}/>
            	}
                {
                    this.state.dataCopy.length
                    ? <MarketOrderList pushNewData={this._pushNewData.bind(this)} data={this.state.dataCopy}  hasMore={this.state.hasMore} isLoadIngMore={this.state.isLoadIngMore} loadIngMoreFn={this.loadMoreData.bind(this)} cancelOrder={this._handleCancelOrder.bind(this)}/>
                    : <div>加载中</div>
                }
                {
                    this.state.alertShow === true
                    ? <Alert sure={this._cancelSure.bind(this)} cancel={this._cancelCancel.bind(this)}/>
                    :''
                }
            </div>
        )
    }
    _pushNewData(){
        this.setState({
            page: 1
        })
        let orderstatus = this.props.orderstatus
        let tabFlag = orderstatus.tabFlag
        let tabNavFlag = orderstatus.tabNavFlag
        var result = getRevData(0,tabNavFlag);
        this._resultHandle(result)
    }
    _clickHandleRec() {
    	this.setState({
    		tabFlag: 0,
    		tabNavFlag: 4,
            dataCopy:[],
            data: [],
            page: 1
    	})

        this.props.orderStatusActions.changeTab(0)
        this.props.orderStatusActions.changeTabNav(4)
        var result = getRevData(0,4);
        this._resultHandle(result)
    }
    _clickHandleOut() {
    	this.setState({
    		tabFlag: 1,
    		tabNavFlag: 4,
            dataCopy:[],
            data: [],
            page: 1
    	})
        this.props.orderStatusActions.changeTab(1)
        this.props.orderStatusActions.changeTabNav(4)
    }
    _clickHandleTabNav0() {
        let tabFlag = this.state.tabFlag

        this.setState({
            tabNavFlag: 4,
            dataCopy:[],
            data: []
        })
        if(tabFlag){

        }else{
            this.props.orderStatusActions.changeTabNav(4)
            var result = getRevData(0,4);
            this._resultHandle(result)
        }
    }
    _clickHandleTabNav1() {
        let tabFlag = this.state.tabFlag
        this.setState({
            tabNavFlag: 1,
            dataCopy:[],
            data: [],
            page: 1
        })
        if(tabFlag){

        }else{
            this.props.orderStatusActions.changeTabNav(1)
            var result = getRevData(0,1);
            this._resultHandle(result)
        }
    }
    _clickHandleTabNav2() {
        let tabFlag = this.state.tabFlag
        this.setState({
            tabNavFlag: 2,
            dataCopy:[],
            data: [],
            page: 1
        })
        if(tabFlag){

        }else{
            this.props.orderStatusActions.changeTabNav(2)
            var result = getRevData(0,2);
            this._resultHandle(result)
        }
    }
    _clickHandleTabNav3() {
        let tabFlag = this.state.tabFlag
        this.setState({
            tabNavFlag: 3,
            dataCopy: [],
            data: [],
            page: 1
        })
        if(tabFlag){

        }else{
            this.props.orderStatusActions.changeTabNav(3)
            var result = getRevData(0,3);
            this._resultHandle(result)
        }
    }
    componentDidMount() {
        this.props.orderStatusActions.update({
            tabFlag: 0,
            tabNavFlag: 4
        })
        this._loadFirstData()
    }

    _loadFirstData(){
        var result = getRevData(0);
        this._resultHandle(result)
    }

    _resultHandle(result){
        result.then( res => {
            return res.json()
        }).then( json => {
            this.setState({
                data: json.data.concat(this.state.data),
                dataCopy: json.data.concat(this.state.data),
                hasMore: json.hasMore
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error(ex)
            }
        })
    }
    loadMoreData(){
        this.setState({
            isLoadIngMore : true
        })
        const tabNavFlag = this.props.orderstatus.tabNavFlag
        const page = this.state.page
        const result = getRevData(page,tabNavFlag)
        this._resultHandle(result)
        this.setState({
            isLoadIngMore:false,
            page: this.state.page + 1
        })
    }
    _handleCancelOrder(id){

        this.setState({
            alertShow: true,
            id:id
        })
    }
    _cancelSure(){
        const id = this.state.id
        console.log('id == '+id)
        let dataCopy = this.state.dataCopy.slice(0)
        dataCopy.filter( (item) => {
            if(item.id !== id){
                return item
            }
        })
        console.log(dataCopy)
        this.setState({
            alertShow: false,
            dataCopy:dataCopy
        })
    }
    _cancelCancel(){
        this.setState({
            alertShow: false
        })
    }
}

function mapStateToProps(state) {
    return {
        orderstatus: state.orderStatus
    }
}
function mapDispatchToProps(dispatch) {
    return {
        orderStatusActions : bindActionCreators(orderStatusActionsFormOtherFile,dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Market_order)