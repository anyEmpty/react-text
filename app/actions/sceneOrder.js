import * as actionTypes from '../constants/sceneOrder.js'

export function updatesceneOrder(data) {
	return {
		type: actionTypes.SCENEORDERTYPE_UPDATE,
		data
	}
}

export function changeSceneType(item) {
	return {
		type: actionTypes.SCENEORDERTYPESTATUS_CHANGE,
		data: item
	}
}

export function changeSceneTabNav(item) {
	return {
		type: actionTypes.SCENEORDERTABSTATUS_CHANGE,
		data: item
	}
}

export function changeSceneTypeShow(item) {
	return {
		type: actionTypes.SCENEORDERTYPESHOW_CHANGE,
		data: item
	}
}