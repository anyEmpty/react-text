import { combineReducers } from 'redux'
import orderStatus from './orderStatus.js'
import sceneStatus from './sceneOrder.js'
import openScene from './openScene.js'
export default combineReducers({
	orderStatus,
	sceneStatus,
	openScene
})