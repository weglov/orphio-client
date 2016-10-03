import fetch from 'isomorphic-fetch';
import Config from '../Config';

export function load(url, token) {
 	return fetch(Config.API + `${url}`, {
        method: 'GET',
        headers: {
            'x-api-token': token || ''
        }
    })
    .then(function(response) {
        if (response.code >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
}


export function post(url, object, token) {
 	return fetch(Config.API + `${url}`, {
 		method: 'POST',
 		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
            'x-api-token': token
  		},
  		body: JSON.stringify(object)
 	}).then(function(response) {
        if (response.code >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
}