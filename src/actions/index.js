import * as types from '../constants/ActionTypes'

export const login = (id, email, token) => (
	{ type: types.AUTHORIZATION, id, email, token}
	)