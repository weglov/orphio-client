import * as types from '../constants/ActionTypes'
import {load, deleteData, post} from './Api.js'
import union from 'lodash/union'


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


function _resourceLoad(user, resource) {
  return {
    type: types.LOAD_RESOURCE,
    user,
    resource,
    receivedAt: Date.now()
  }
}

// SET ACTIVE ID
export function setActiveResource(id) {
  return {
    type: types.ACTIVE_RESOURCE,
    id
  }
}

// DELETE
function _deleteResource(id) {
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
          dispatch(_deleteResource(id))
        })
  }
}

// LOAD
export function resourceAll(user) {
    return dispatch => {
      return load(`resource/self/${user}`)
        .then(json => dispatch(_resourceLoad(user, json)))
        .then(json => {
          dispatch(setActiveResource(json.resource[0].id))
        })
    }
}

// ADD
function _resourceAdd(state, json) {
  return {
    type: types.ADD_RESOURCE,
    state
  }
}
export function resourceAdd(state, token) {
    return dispatch => {
      return post(`resource/`, state, token)
        .then(json => dispatch(_resourceAdd(state, json)))
    }
}

// Mistake 
function _mRequest(resource) {
  return {
    type: types.REQUEST_M,
    resource
  }
}
function _mLoad(resource, m) {
  return {
    type: types.LOAD_M,
    resource,
    m
  }
}

export function mLoad(resource, offset, count, token) {
    return (dispatch, getState) => {
      dispatch(_mRequest(resource))
      return load('m/?resource='+ resource +'&offset=' + offset + '&count=' + count, token)
        .then(m => {
          dispatch(_mLoad(resource || getState().resource.active, getState().mistake.m[resource] ? union(getState().mistake.m[resource], m) : m))
        })
    }
}


// LOAD MORE

