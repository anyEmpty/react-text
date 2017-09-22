import * as actionTypes from '../constants/sceneOrder.js'
const initialState = []

export default function  store (state = initialState, action) {
	switch (action.type) {
		case actionTypes.SCENEORDERTYPE_UPDATE:
			return action.data

		case actionTypes.SCENEORDERTYPESTATUS_CHANGE:
			state.orderTypeStatus = action.data
			return state

		case actionTypes.SCENEORDERTABSTATUS_CHANGE:
			state.orderTabStatus = action.data
			return state
		case actionTypes.SCENEORDERTYPESHOW_CHANGE:
			state.orderTypeShow = action.data
		default:
			return state
	}
}