import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class Loading extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="loading">
            </div>
        )
    }
}

export default Loading