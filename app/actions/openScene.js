import * as actionTypes from '../constants/openScene.js'

export function updateOpenScene(data) {
	return {
		type: actionTypes.OPENSCENETYPE_UPDATE,
		data
	}
}

export function changeOpenSceneType(item) {
	return {
		type: actionTypes.OPENSCENETYPE_CHANGE,
		data: item
	}
}
