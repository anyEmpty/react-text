var app = require('koa')();
var router = require('koa-router')();

// 进货单 
var MarketOrderData = require('./Market-order/rev.js')
var MarketOrderData0 = require('./Market-order/status0.js')
var MarketOrderData1 = require('./Market-order/status1.js')
var MarketOrderData2 = require('./Market-order/status2.js')
var MarketOrderData3 = require('./Market-order/status3.js')
router.get('/api/Market-order/:page/:status', function *(next) {
    const params = this.params
    const paramsPage = params.page
    const paramsStatus = params.status
    if(paramsStatus == 1){
    	// 代付款
    	console.log(paramsPage+'=========代付款')
    	this.body = MarketOrderData1
    }else if(paramsStatus == 2){
    	// 代收货
    	console.log(paramsPage+'=========代收货')
    	this.body = MarketOrderData2
    }else if(paramsStatus == 3){
    	// 已取消
    	console.log(paramsPage+'=========已完成')

   		this.body = MarketOrderData3
    }else if(paramsStatus == 0){

    	console.log(paramsPage+'=========已取消')
    	// 已完成
   		this.body = MarketOrderData0
    }else{

    	console.log(paramsPage+'=========所有')
   		this.body = MarketOrderData
    }
});


var dataType0 = require('./sceneOrder/textType0.js')
var dataType0_0 = require('./sceneOrder/textType0_0.js')
var dataType0_1 = require('./sceneOrder/textType0_1.js')
var dataType0_2 = require('./sceneOrder/textType0_2.js')
var dataType1 = require('./sceneOrder/textType1.js')
var dataType2 = require('./sceneOrder/textType2.js')
var dataType3 = require('./sceneOrder/textType3.js')
var dataTypeall = require('./sceneOrder/textTypeAll.js')
router.get('/api/scene/:typeStatus/:tabStatus/:page', function *(next) {
    const params = this.params
    const paramstypeStatus = params.typeStatus
    const paramstabStatus = params.tabStatus
    if(paramstypeStatus == 4){
        // 全部
        if(paramstabStatus == 3){
            // 全部
            console.log('type == 4 status == 3 全部 --- 全部')
            this.body = {
                data: dataTypeall,
                code: '000000'
            }
        }else if(paramstabStatus == 0){
            // 代付款
            console.log('type == 4 status == 0 全部 --- 代付款')
            this.body = {
                data: dataType0_0,
                code: '000000'
            }
        }else if(paramstabStatus == 1){
            // 已付款
            console.log('type == 4 status == 1 全部 --- 已付款')
            this.body = {
                data: dataType0_1,
                code: '000000'
            }
        }else if(paramstabStatus == 2){

            console.log('type == 4 status == 2 全部 --- 已完成')
            // 已完成
            this.body = {
                data: dataType0_2,
                code: '000000'
            }
        }
    }else if(paramstypeStatus == 0){
        // 全额支付
        if(paramstabStatus == 3){
            // 全部
            console.log('type == 0 status == 3 全额支付 --- 全部')
            this.body = {
                data: dataType0,
                code: '000000'
            }
        }else if(paramstabStatus == 0){
            // 代付款
            console.log('type == 0 status == 0 全额支付 --- 代付款')
            this.body = {
                data: dataType0,
                code: '000000'
            }
        }else if(paramstabStatus == 1){
            // 已付款
            console.log('type == 0 status == 1 全额支付 --- 已付款')
            this.body = {
                data: dataType0,
                code: '000000'
            }
        }else if(paramstabStatus == 2){

            console.log('type == 0 status == 2 全额支付 --- 已完成')
            // 已完成
            this.body = {
                data: dataType0,
                code: '000000'
            }
        }
    }else if(paramstypeStatus == 1){
        // 预定金
        if(paramstabStatus == 3){
            // 全部
            console.log('type == 1 status == 3 预定金 --- 全部')
            this.body = {
                data: dataType1,
                code: '000000'
            }
        }else if(paramstabStatus == 0){
            // 代付款
            console.log('type == 1 status == 0 预定金 --- 代付款')
            this.body = {
                data: dataType1,
                code: '000000'
            }
        }else if(paramstabStatus == 1){
            // 已付款
            console.log('type == 1 status == 1 预定金 --- 已付款')
            this.body = {
                data: dataType1,
                code: '000000'
            }
        }else if(paramstabStatus == 2){

            console.log('type == 1 status == 2 预定金 --- 已完成')
            // 已完成
            this.body = {
                data: dataType1,
                code: '000000'
            }
        }
    }else if(paramstypeStatus == 2){
        // 现场付
        if(paramstabStatus == 3){
            // 全部
            console.log('type == 2 status == 3 现场付 --- 全部')
            this.body = {
                data: dataType2,
                code: '000000'
            }
        }else if(paramstabStatus == 0){
            // 代付款
            console.log('type == 2 status == 0 现场付 --- 代付款')
            this.body = {
                data: dataType2,
                code: '000000'
            }
        }else if(paramstabStatus == 1){
            // 已付款
            console.log('type == 2 status == 1 现场付 --- 已付款')
            this.body = {
                data: dataType2,
                code: '000000'
            }
        }else if(paramstabStatus == 2){

            console.log('type == 2 status == 2 现场付 --- 已完成')
            // 已完成
            this.body = {
                data: dataType2,
                code: '000000'
            }
        }
    }else{
        // 0元场景
        if(paramstabStatus == 3){
            // 全部
            console.log('type == 3 status == 3 0元场景 --- 全部')
            this.body = {
                data: dataType3,
                code: '000000'
            }
        }else if(paramstabStatus == 0){
            // 代付款
            console.log('type == 3 status == 0 0元场景 --- 代付款')
            this.body = {
                data: dataType3,
                code: '000000'
            }
        }else if(paramstabStatus == 1){
            // 已付款
            console.log('type == 3 status == 1 0元场景 --- 已付款')
            this.body = {
                data: dataType3,
                code: '000000'
            }
        }else if(paramstabStatus == 2){

            console.log('type == 3 status == 2 0元场景 --- 已完成')
            // 已完成
            this.body = {
                data: dataType3,
                code: '000000'
            }
        }
    }
});

// 进货单 
var openAll = require('./openScene/opentextType0.js')
var open0 = require('./openScene/opentextType1.js')
var open1 = require('./openScene/opentextType2.js')
var open2 = require('./openScene/opentextType3.js')
var open3 = require('./openScene/opentextType4.js')
router.get('/api/openscene/:status/:page', function *(next) {
    const params = this.params
    const paramsPage = params.page
    const paramsStatus = params.status
    if(paramsStatus == 5){
        // 所有
        console.log(paramsPage+'=========所有')
        this.body = openAll
    }else if(paramsStatus == 1){
        // 全额支付
        console.log(paramsPage+'=========全额支付')
        this.body = open0
    }else if(paramsStatus == 2){
        // 预定金
        console.log(paramsPage+'=========预定金')

        this.body = open1
    }else if(paramsStatus == 3){

        console.log(paramsPage+'=========现场付')
        // 现场付
        this.body = open2
    }else{

        console.log(paramsPage+'=========0元场景')
        this.body = open3
    }
});
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
