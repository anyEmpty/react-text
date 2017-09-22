import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Header from '../../components/Header'
import Tab from './subpage/Tab.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getData } from '../../fetch/openScene/text.js'
import OpenSceneList from '../../components/openSceneList'
import Loading from '../../components/Loading'

import * as openSceneTypeActionsFormOtherFile from '../../actions/openScene.js'
class OpenScene extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            hasMore: false,
            isLoadIngMore: false,
            page: 1,
        	data: []
        }
    }
    render() {
        return (
            <div id="openscene">
            	<Header title="我发起的场景" control1={false} control2={false}/>
            	<Tab tabClick={this._handleTabClick.bind(this)}/>
                {
                    this.state.data.length != 0
                    ? <OpenSceneList data={this.state.data}  hasMore={this.state.hasMore} isLoadIngMore={this.state.isLoadIngMore} loadIngMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    _handleTabClick() {
    	this.setState({
    		page: 1,
    		data:[]
    	})
        const tabStatus = this.props.openSceneType.tabStatus
        const result = getData(tabStatus,0)
        this._resultHandle(result)
    }
    loadMoreData(){
        this.setState({
            isLoadIngMore : true
        })
        const page = this.state.page
        const tabStatus = this.props.openSceneType.tabStatus
        const result = getData(tabStatus,page)
        this._resultHandle(result)
        this.setState({
            isLoadIngMore:false,
            page: this.state.page + 1
        })
    }
    componentWillMount() {
    	this.props.openSceneTypeActions.updateOpenScene({
    		tabStatus: 5
    	})
    }
    componentDidMount() {
    	let result = getData(5,0)
    	console.log(result)
    	this._resultHandle(result)
    }
    _resultHandle(result){
        result.then( res => {
            return res.json()
        }).then( json => {
            this.setState({
                data: json.data.concat(this.state.data),
                hasMore: json.hasMore
            })
            console.log(this.state)
        }).catch(ex => {
            if (__DEV__) {
                console.error(ex)
            }
        })
    }
}

// export default OpenScene
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
)(OpenScene)