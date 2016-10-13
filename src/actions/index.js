import * as types from '../constants/ActionTypes'
import {load, post} from './Api.js'

export function login(user) {
  return {
    type: types.LOGIN,
    user
  }
}

export function logout(user) {
  return {
    type: types.LOGOUT,
    user
  }
}

export function authorization(user) {
  return {
    type: types.AUTHORIZATION,
    user
  }
}


function resourceLoad(user, resource) {
  return {
    type: types.LOAD_RESOURCE,
    user,
    resource,
    receivedAt: Date.now()
  }
}

export function addResource(resource) {
  return {
    type: types.ADD_RESOURCE,
    resource,
    receivedAt: Date.now()
  }
}

export function resourceAll(user) {
    return dispatch => {
      return load(`resource/self/${user}`)
        .then(json => dispatch(resourceLoad(user, json)))
    }
}


export function resourceAdd(object, token) {
    return post(`resource/`, object, token)
      .then(json => addResource(json))
}