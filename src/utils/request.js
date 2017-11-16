
import fetch from 'dva/fetch';
import { session } from 'common/util/storage.js';

function parseJSON(response) {
  return response.json();
}



function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // let error = new Error(response.statusText);
  let error = new Error('获取数据异常');
  if (response.status == 504) {
    error = new Error( "请求超时");
  }
  error.response = response;
  //console.log('request:error>>', response);
  throw error;
}


function catchErr(error) {
  throw error;
}

function checkCode(data) {
  // const { flag} = data;
  // // const whiteList = [6];
  // if (flag!="SUCCESS") {
  //   const error = new Error( "请求错误" );
  //   throw error;
  // }
  return { data };
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

   const headers={
      "Content-Type":"application/json",
      "token":"005cca20121122PZOX7Q"
    }

    options = {...options, headers};

  return fetch(url, options,)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .catch(catchErr);
}
