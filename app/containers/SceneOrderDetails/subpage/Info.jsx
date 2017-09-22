import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="info">
        		<h3>万圣节佘山轰趴万圣节佘山轰趴万圣节佘山轰趴万圣节佘山轰趴</h3>
        		<p className="clearfix type">
        			<span className="fl">全额场景</span>
        			<span className="fl">找组织者使用</span>
        			<span className="fr">代付款</span>
    			</p>
        		<p className="clearfix total">
        			<span className="fl">合计:</span>
        			<span className="fr"><i>&yen;</i>11545645<i>.00</i></span>
        		</p>
        		<div className="infoDetails">
        			<p className="clearfix"><span className="fl">数量</span><span className="fr">5</span></p>
        			<p className="clearfix"><span className="fl">手机号</span><span className="fr">1856165216586</span></p>
        			<p className="clearfix"><span className="fl">订单编号</span><span className="fr">4142656565</span></p>
        			<p className="clearfix"><span className="fl">下单时间</span><span className="fr">2016.02.6</span></p>
        			<p className="clearfix"><span className="fl">有效期</span><span className="fr">2016.64.45</span></p>
        			<p className="clearfix"><span className="fl">用户昵称</span><span className="fr">明年就没</span></p>
        			<p className="clearfix"><span className="fl">用户真实姓名</span><span className="fr">卡里面打开</span></p>
        			<p className="clearfix"><span className="fl">身份证号</span><span className="fr">21523131521352</span></p>
        			<h3><span>备注: </span>科马标点符号比较好的暴发户的办法就会变得好没本事的可能被科技不发达开始的呢不戒和尚就是你打开今年开始的</h3>
        		</div>
        	</div>
        )
    }
}

export default Info