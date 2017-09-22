import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Swipe extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index : 0
        }
    }
    render() {
    	let opt = {
    		auto: 2000,
    		width: 750,
            callback: (index) => {
                this.setState({
                    index:index
                })
            },
    	}
        return (
            <div id="swipe">
				<ReactSwipe className="" swipeOptions={opt}>
	                <div>
	                1
                    </div>
	                <div>
	                2
                    </div>
	                <div>
	                3
                    </div>
	            </ReactSwipe>
            </div>
        )
    }
    componentDidMount() {
    	
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default Swipe