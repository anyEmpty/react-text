import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import text from '../../../static/images/text.png'
import './style.less'
class Content extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="content">
            	<h3><span>套餐项</span></h3>
            	<div className="item">
            		<p className="tit clearfix">场地别墅 <span>x1</span> <span className="fr">已使用</span></p>
            		<p className="infoCon">你看你克服恐惧你减肥亟待解决就看看能打开就能见到就多少技能等级考试的可是当年开始的几年就可能是当时看见你的</p>
            		<ul className="clearfix">
            			<li><img src={text}/></li>
            			<li><img src={text}/></li>
            			<li><img src={text}/></li>
            		</ul>
            	</div>
            	<div className="item">
            		<p className="tit">自助餐 <span>x1</span><span className="fr">已使用</span></p>
            		<p className="infoCon">你看你克服恐惧你减肥亟待解决就看看能打开就能见到就多少技能等级考试的可是当年开始的几年就可能是当时看见你的</p>
            		<ul className="clearfix">
            			<li><img src={text}/></li>
            			<li><img src={text}/></li>
            		</ul>
            	</div>
            </div>
        )
    }
}

export default Content