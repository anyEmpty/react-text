import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link } from 'react-router'
import './index.less'
class Itme extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const item = this.props.item
        return (
            <div className="marketOrderList">
             		<div className="head clearfix">
             			<span className="fl"><i className="iconfont icon-daxiang"></i>{item.title}</span>
                  {
                    item.status === 1
                    ? <span className="fr">待付款</span>
                    : item.status === 2
                      ? <span className="fr">待收货</span>
                      : item.status === 3
                        ? <span className="fr">已完成</span>
                        : <span className="fr">已取消</span>
                  }
             		</div>
                <Link to={'/marketOrderDetails/'+item.id+'/'+item.status}>
             		<div className="center clearfix">
             			<div className="img">
             				<img src='http://apic.zuyushop.com/cuxiaoPic/20179/2017090009353655570.jpg'/>
             			</div>
             			<div className="centerBox">
             				<p className="one-txt-cut intr">{item.subTitle}</p>
             				<p className="clearfix one">
             					<span className="fl">&yen;{item.price}</span>
             					<span className="fr">x1</span>
             				</p>
             			</div>
             			<p className="clearfix all">
             				<span className="fr">合计: &yen;{item.allPrice}</span>
             				<span className="fr">数量: {item.num}</span>
             			</p>
             		</div>

              </Link>
     		  <div className="foot clearfix">
                  {
                    item.status === 1
                    ? <div>
                        <button className="fr cancel" onClick={this._handleCancelOrder.bind(this)}>取消订单</button><button className="fr pay">立即支付</button>
                      </div>
                    : item.status === 2
                      ? <button className="fr sure">确认收货</button>
                      : ''
                  }
     		  </div>
            </div>
        )
    }
    _handleCancelOrder() {
      const id = this.props.item.id
      const cancelOrder = this.props.cancelOrder
      cancelOrder(id)
    }
}

export default Itme