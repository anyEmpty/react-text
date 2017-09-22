import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="header">
            	<i className="iconfont icon-fanhui"></i>
            	<h3>{this.props.title}</h3>
            	<div>
                {
                    this.props.control1
                    ?<i className="iconfont icon-daxiang" onClick={this._handleClickOrderTyoe.bind(this)}></i>
                    :''
                }
                {
                    this.props.control2
                    ?<i className="iconfont icon-yanchurili"></i>
                    :''
                }
                </div>
            </div>
        )
    }
    _handleClickOrderTyoe() {
        const orderType = this.props.orderType;
        orderType();
    }
}

export default header