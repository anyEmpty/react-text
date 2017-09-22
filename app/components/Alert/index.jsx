import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

import text from '../../static/images/text.png'

class Alert extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="alert" onClick={this._handleUnShow.bind(this)}>
			    <div className="info clearfix">
			        <img src={text}/>
			        <p>确定要取消订单?</p>
			        <input type="button" className=" sure" value="确定" onClick={this._handleSure.bind(this)}/>
			        <input type="button" className=" cancel" value="取消" onClick={this._handleCancel.bind(this)}/>
			    </div>
            </div>
        )
    }
    _handleUnShow(){

    }
    _handleCancel(){
    	const cancel = this.props.cancel
    	cancel();
    }
    _handleSure(){
    	const sure = this.props.sure
    	sure();
    }
}

export default Alert