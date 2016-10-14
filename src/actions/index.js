import * as types from '../constants/ActionTypes'
import {load, deleteData} from './Api.js'

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


export function setActiveResource(id) {
  return {
    type: types.ACTIVE_RESOURCE,
    id
  }
}

function deletR(id) {
  return {
          type: types.DELETE_RESOURCE,
          id
  }
}
export function deleteResource(id, sid, token) {
  console.log(arguments);
  return dispatch => {
    return deleteData(`resource/${sid}`, token)
      .then(json => {
          dispatch(deletR(id))
        })
  }
}

export function resourceAll(user) {
    return dispatch => {
      return load(`resource/self/${user}`)
        .then(json => dispatch(resourceLoad(user, json)))
        .then(json => {
          dispatch(setActiveResource(json.resource[0].id))
        })
    }
}

