import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Item from './Item'
import LoadIngMore from '../../components/LoadIngMore/LoadIngMore.jsx'
class OpenSceneList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	containerBox: null
        }
    }
    render() {
        const data = this.props.data
        const isLoadIngMore = this.props.isLoadIngMore
        const loadIngMoreFn = this.props.loadIngMoreFn
        const hasMore = this.props.hasMore
        return (
            <div id="openSceneList" ref="container">
	            {
	            	data.map(function(elem,index) {
	            		return <Item key={index} item={elem}/>;
	            	})
	            }
                {
                    hasMore
                    ? <LoadIngMore isLoadIngMore={isLoadIngMore} loadIngMoreFn={loadIngMoreFn} containerBox={this.state.containerBox}/>
                    : <div>已经加载到底了</div>
                }
            </div>
        )
    }
    componentDidMount() {
    	this.setState({
    		containerBox: this.refs.container
    	})
    }
}

export default OpenSceneList