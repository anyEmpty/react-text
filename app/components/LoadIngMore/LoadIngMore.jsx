import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"

class LoadIngMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="loadingMore" ref="box">
            	{
            		this.props.isLoadIngMore
            		?<span>加载中.....</span>
            		:<span onClick={this.loadingmore.bind(this)}>加载更多</span>
            	}
            </div>
        )
    }

    loadingmore() {
    	this.props.loadIngMoreFn()
    }
    componentDidMount() {
    	const loadingmorefn = this.props.loadIngMoreFn
    	const box = this.refs.box
        let add = setInterval(function(){
            const container = this.props.containerBox
            if(container){
                clearTimeout(add)
                let timerOut
                function callBack() {
                    const top =  box.getBoundingClientRect().top
                    const height = window.screen.height
                    console.log(top,height)
                    if(top && top < height){
                        loadingmorefn()
                    }
                }
                container.addEventListener('scroll',function() {
                    if(this.props.isLoadIngMore) return
                    if(timerOut){
                        clearTimeout(timerOut)
                    }
                    timerOut = setTimeout(callBack,100)
                }.bind(this),false)
            }
        }.bind(this),100)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = LoadIngMore