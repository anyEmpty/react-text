import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link } from 'react-router'
import './style.less'
class Itme extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const item = this.props.item
    	console.log(item)
        return (
            <div className="sceneOrderItem">
         		<div className="head clearfix">
	     			<span className="fl">订单编号: 12345678</span>
                    {
                      item.status === 0
                      ? <span className="fr">待付款</span>
                      : item.status === 1
                        ? <span className="fr">已付款</span>
                        : item.status === 2
                          ? <span className="fr">已完成</span>
                          : ''
                    }
         		</div>
                <Link to={'/sceneorderdetails/'+item.id+'/'+item.status}>
             		<div className="center clearfix">
             			<div className="img">
                            {
                              item.type === 0
                              ? <i>全额支付</i>
                              : item.type === 1
                                ? <i>预定金</i>
                                : item.type === 2
                                  ? <i>现场付</i>
                                  : <i>0元场景</i>
                            }
             				<img src='http://apic.zuyushop.com/cuxiaoPic/20179/2017090009353655570.jpg'/>
             			</div>
             			<div className="centerBox">
             				<p className="one-txt-cut intr">{item.subTitle}</p>
             				<p className="clearfix one">
             					<span className="fl">数量: 1</span>
             					<span className="fr">合计: &yen;{item.price}</span>
             				</p>
	             			<p className="clearfix all">
	             				<span className="fl">有效期: 2016.02.03 - 2016.05.45</span>
	             			</p>
             			</div>
             		</div>

              </Link>
            </div>
        )
    }
}

export default Itme