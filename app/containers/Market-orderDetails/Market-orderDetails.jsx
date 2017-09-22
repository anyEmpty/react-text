import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import text from '../../static/images/text.png'
import './style.less'

class MarketOrderDetils extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const params = this.props.params
    	console.log(223232,params)
        return (
            <div id="marketOrderDetails">
            	<Header title='进货单详情' control1={false} control2={false}/>
            	<div className="container">
            		<div>
		    	 		<div className='inform'>
							<p className="num clearfix">
			                <span className="fl">订单编号 :&nbsp;&nbsp;<span className="orderNo">32323223</span></span>
			                  {
			                    params.status == 1
			                    ? <span className="fr">待付款</span>
			                    : params.status == 2
			                      ? <span className="fr">待收货</span>
			                      : params.status == 3
			                        ? <span className="fr">已完成</span>
			                        : <span className="fr">已取消</span>
			                  }
			           	 	</p>
			            	<p className="data">创建时间 :&nbsp;&nbsp;11113121233</p>
		        	    </div>
					    <div className="perInform clearfix">
					        <p>
					            <span className="fl">收货人 :&nbsp;&nbsp; 56416546</span>
					            <span className="fr">电话 :&nbsp;&nbsp; 4541654641</span>
					        </p>
					    </div>
				        <div className="containerBox">
				                <div className="item">
				                    <div className="tit clearfix">
				                        <i className="fl"><img src={text} alt=""/></i>
				                        <span className="fl one-txt-cut">25251312</span>
				                    </div>
				                    <div className="info clearfix">
				                        <div className="info_left">
				                            <img src={text} alt=""/>
				                        </div>
				                        <div className="info_right">
				                                <i className="finish"></i>
				                            <p className="one-txt-cut">65655</p>
				                            <p className="clearfix">
				                                <span className="fl">&yen; 451562</span>
				                                <span className="fr">x236</span>
				                            </p>
				                        </div>
				                    </div>
				                </div>
				            <div className="prama">
				                <p className="clearfix"><span className="fl">优惠券</span><span className="fr">-&yen; 21651</span></p>
				                <p className="clearfix">
				                    <span className="fl">支付方式</span>
				                        <span className="fr">其他</span>
				                </p>
				                <p className="clearfix">
				                    <span className="fl">数量</span>
				                    <span className="fr">1635}</span>
				                </p>
				                <p className="clearfix">
				                    <span className="fl">合计</span>
				                    <span className="fr special tatotalPrice">
				                            <span>&yen;</span>1521.<span>1541</span>
				                    </span>
				                </p>
				            </div>
				        </div>

	                   {
		                   params.status == 1
		                   ?
			                 <div className="btn clearfix">
			                     <input type="button" value="取消订单" className="calPay fl"/>
			                     <input type="button" value="立即支付" className="imPay fl"/>
			                 </div>
		                   : params.status == 2
		                     ?
	                     	   <div>
				                   <div className="code waitPick">
						               <div className="bgContainer">
						                   <p className="tit">卷码: 161131315213131212</p>
						                   <div className = "purchaseErweima">
						                   </div>
						                   <p className="pro">请出示二维码完成采购</p>
						               </div>
						           </div>
						           <input type="button" value="确认收货" className="imPay btnSureRecive"/>
	                     	   </div>
		                     :
						       <div className="code hasFinish">
						           <div className="bgContainer">
						               <p className="tit">卷码: 1321323</p>
						               <div className="img">
						                   <i className="hasFinImg"></i>
						                   <div className = "purchaseErweima">
						                   </div>
						               </div>
						               <p className="pro">订单已结束</p>
						           </div>
						       </div>
	                   }



            		</div>
            	</div>
            </div>
        )
    }
    componentDidMount() {
    	console.log(this.props.params)
    }
}

export default MarketOrderDetils