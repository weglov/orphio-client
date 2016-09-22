import fetch from 'isomorphic-fetch';
import Config from './Config';

export function load(url) {
 	return fetch(Config.BASEURL + `${url}`)
    .then(function(response) {
        if (response.code >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
}
