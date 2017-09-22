import * as actionTypes from '../constants/openScene.js'
const initialState = []

export default function  store (state = initialState, action) {
	switch (action.type) {
		case actionTypes.OPENSCENETYPE_UPDATE:
			return action.data

		case actionTypes.OPENSCENETYPE_CHANGE:
			state.tabStatus = action.data
			return state

		default:
			return state
	}
}