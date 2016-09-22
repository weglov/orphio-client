import fetch from 'isomorphic-fetch';
import Config from '../Config';

export function load(url) {
 	return fetch(Config.API + `${url}`)
    .then(function(response) {
        if (response.code >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
}


export function post(url, object) {
 	return fetch(Config.API + `${url}`, {
 		method: 'POST',
 		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
  		},
  		body: JSON.stringify(object);
 	}).then(function(response) {
        if (response.code >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
}