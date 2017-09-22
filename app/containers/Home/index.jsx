import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Swipe from '../../components/Swipe'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id='home'>
            	<Swipe/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default Home
