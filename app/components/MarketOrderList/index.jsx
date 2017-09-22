import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Itme'
import LoadIngMore from '../../components/LoadIngMore/LoadIngMore.jsx'
import Loading from '../../components/Loading'
import './index.less'
import { Tool } from '../../config/touch.js'
class MarketOrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const isLoadIngMore = this.props.isLoadIngMore
        const loadIngMoreFn = this.props.loadIngMoreFn
        const hasMore = this.props.hasMore
        const cancelOrder = this.props.cancelOrder
        return (
            <div id="marketOrderList" ref="container">
                <Loading/>
            	{
            		data.map((item,index) => {
            			return <Item key={index} item={item} cancelOrder={cancelOrder}/>
            		})
            	}
                {
                    hasMore
                    ? <LoadIngMore isLoadIngMore={isLoadIngMore} loadIngMoreFn={loadIngMoreFn} containerBox={this.refs.container}/>
                    : <div>已经加载到底了</div>
                }
            </div>
        )
    }
    componentDidMount() {
        const pushNewData = this.props.pushNewData
        this.setState({
            containerBox: this.refs.container
        })
        let starty = 0, isMove = false, distance = 0, startTime = 0;
        this.refs.container.addEventListener('touchstart',function(e){
            starty = e.touches[0].clientY;
            startTime = Date.now();
        })
        this.refs.container.addEventListener('touchmove',function(e){

            isMove = true;
            /*移动距离*/
            distance = e.touches[0].clientY - starty;
            if(distance >= 66) distance = 66
            if(distance <= 0) return
            this.style.transform ="translateY("+distance+"px)"
        })
        this.refs.container.addEventListener('touchend',function(e){

            var time = Date.now() - startTime;
            pushNewData()
            this.style.transition = 'transform  0.3s';
            this.style.transform ="translateY(0)"
            /*数据清零*/
            starty = 0;
            isMove = false;
            distance = 0;
            startTime = 0;
        })
    }
}

export default MarketOrderList