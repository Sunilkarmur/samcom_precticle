import axios from 'axios';
import Config from "../Config";

export const rawInstance = axios.create({
  withCredentials: true,
  headers: {
      Accept: 'application/json'
  }
});

export const ssoInstance = axios.create({
    baseURL:Config.API_URL,
    headers: {
        Accept: 'application/json'
    }
});

// Add a request interceptor
ssoInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
ssoInstance.interceptors.response.use(async (response)=> {

      return response;

  },  async (error)=> {
      if(undefined !== error.response){

          if(401 === error.response.status) {
          }else if(424 === error.response.status) {
          }
      }

    return new Promise( (resolve, reject)=> {
        reject(error)
    })
});


export const autoInstance = axios.create({
    withCredentials: true,

});

// Add a request interceptor
autoInstance.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // Do something with request error
    return new Promise( (resolve, reject)=> {
        reject(error)
    })
});


export default ssoInstance;
