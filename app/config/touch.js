
export const Tool = {};
Tool.touch = (container) => {

        let starty = 0, isMove = false, distance = 0, startTime = 0;
        container.addEventListener('touchstart',function(e){
            starty = e.touches[0].clientY;
            startTime = Date.now();
        })
        container.addEventListener('touchmove',function(e){

            isMove = true;
            /*移动距离*/
            distance = e.touches[0].clientY - starty;
            if(distance >= 66) distance = 66
            if(distance <= 0) return
            this.style.transform ="translateY("+distance+"px)"
        })
        container.addEventListener('touchend',function(e){

            var time = Date.now() - startTime;
            // 滑动成功的依据 ： 滑动了  并且滑动的时间300毫秒同时滑动的距离大于30px
            //if (isMove && (Math.abs(distance) > 30 && time < 300)) {
            // if (isMove && (Math.abs(distance) > 30)) {

            //     if (distance > 0) {
            //         /*向下划*/
            //         this.style.transition = 'transform  0.3s';
            //         this.style.transform ="translateY(1.32rem)"
            //     } else {
            //         /*向上划*/
            //         this.style.transition = 'transform  0.3s';
            //         this.style.transform ="translateY(0)";
            //     }
            // } else {
            //     /*添加过度*/
            //     /*归位*/

            // }
            this.style.transition = 'transform  0.3s';
            this.style.transform ="translateY(0)"
            /*数据清零*/
            starty = 0;
            isMove = false;
            distance = 0;
            startTime = 0;
        })
}
