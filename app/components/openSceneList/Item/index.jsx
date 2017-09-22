import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import text from '../../../static/images/ss.png'
import { Link } from 'react-router'
import './style.less'
class Itme extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const item = this.props.item
        return (
            <div className="openSceneItem">
            	<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506075909335&di=741ef04a579241f524b759cb1ae936f2&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140507%2F240396-14050H1192327.jpg'/>
            	{
            		item.status === 0
            		? <span className="type">全额支付</span>
            		: item.status === 1
            		  ? <span className="type">预定金</span>
            		  : item.status === 2
            		    ? <span className="type">现场付</span>
            		    : <span className="type">0元场景</span>
            	}
            	<div className="center">
            		<p>{item.title}</p>
            		<p>{item.subTitle}</p>
            	</div>
        		<div className="price">价格: {item.allPrice}</div>
            </div>
        )
    }
}

export default Itme