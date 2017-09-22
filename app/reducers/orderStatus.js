import * as actionTypes from '../constants/orderStatus.js'
const initialState = []

export default function  store (state = initialState, action) {
	switch (action.type) {
		case actionTypes.ORDERSTATUS_UPDATE:
			return action.data

		case actionTypes.ORDERSTATUS_CHANGETABFLAG:
			state.tabFlag = action.data
			return state

		case actionTypes.ORDERSTATUS_CHANGETABNAVFLAG:
			state.tabNavFlag = action.data
			return state

		default:
			return state
	}
}