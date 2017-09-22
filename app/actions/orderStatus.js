import * as actionTypes from '../constants/orderStatus.js'

export function update(data) {
	return {
		type: actionTypes.ORDERSTATUS_UPDATE,
		data
	}
}

export function changeTab(item) {
	return {
		type: actionTypes.ORDERSTATUS_CHANGETABFLAG,
		data: item
	}
}

export function changeTabNav(item) {
	return {
		type: actionTypes.ORDERSTATUS_CHANGETABNAVFLAG,
		data: item
	}
}