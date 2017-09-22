import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import LoadIngMore from '../../components/LoadIngMore/LoadIngMore.jsx'
import Item from './item'
import './style.less'
class SceneOrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const isLoadIngMore = this.props.isLoadIngMore
        const loadIngMoreFn = this.props.loadIngMoreFn
        const hasMore = this.props.hasMore
        return (
            <div id="sceneOrderList" >
            	{
            		data.map((item,index) => {
            			return <Item key={index} item={item}/>
            		})
            	}
                {
                    hasMore
                    ? <LoadIngMore isLoadIngMore={isLoadIngMore} loadIngMoreFn={loadIngMoreFn} containerBox={this.props.containerBox}/>
                    : <div>已经加载到底了</div>
                }
            </div>
        )
    }
    componentDidMount() {
    	
    }
}

export default SceneOrderList