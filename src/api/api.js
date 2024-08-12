// import { Alert, I18nManager } from "react-native";
// import all strings we need, Translation have all messages and lables in several languages ((MOHAJ))
// import Strings from '../Translation';
// import Local storage
// import AsyncStorage from '@react-native-community/async-storage';

//START To chick language ((MOHAJ))
// var IS_RTL = I18nManager.isRTL;
// if (IS_RTL) {
//     var strings = Strings.ar
// } else {
//     var strings = Strings.enUS
// }
//END To chick language ((MOHAJ))

// START HTTP call  
const callAsyncAPI = async (domain, data, returnedValue = '') => {
    try {
        let response = await fetch(domain, data);
        let res = await response.json();

        console.log('RESPONSE RES', res)
        //console.log('RESPONSE ALL', res)
        if (response.status == 404) {
            //not found ((MOHAJ))
            console.log('404', response, domain, data);

            return false;
        } else if (response.status == 401) {
            //authentication Error ((MOHAJ))
            console.log('401', response, domain, data);

            return res;
        } else if (response.status == 500) {
            //internal server error ((MOHAJ))
            console.log('500', response, domain, data);

            return false;
        } else if (response.status >= 200 && response.status < 300) {
            //success
            return returnedValue ? res[`${returnedValue}`] : res;
        } else if (response.status == 405 || response.status == 400) {
            //405 => request refused 
            //400 => bad request
            console.log('405 || 400', response, domain, data);

            return false;
        } else {
            //internet error
            console.log('internet', response, domain, data);

            return false;
        }
    } catch (error) {
        //data error
        console.log('data error', error, domain, data);

        return false;
    }
}

//START headers && body Processing To send api FUNC MOHAJ
const callApi = (domain, data, headerToken, methodName = 'POST', files = false) => {
    var configApi = {};
    configApi['method'] = methodName;
    if (methodName != 'GET') {
        configApi['body'] = files ? data : JSON.stringify(data);
    } else {
        domain += '?';
        for (const key in data) {
            domain += key + '=' + data[key] + '&';
        }
    }
    if (methodName != 'GET') {
        configApi['headers'] = {
            'X-Custom-Token': headerToken,
            'Content-Type': 'application/json',
        }
    } else {
        configApi['headers'] = {
            'X-Custom-Token': headerToken
        }
    }
    let resData = callAsyncAPI(domain, configApi);
    return resData;
};
//END headers && body Processing To send api FUNC MOHAJ


// START To chick isLohin OR token found MOHAJ
const checkLoginData = async () => {
    // let token = await AsyncStorage.getItem('token');
    // let loginData = {};
    // if (loginMethod == 'email') {
    //     let email = await AsyncStorage.getItem('email');
    //     let password = await AsyncStorage.getItem('password');
    //     loginData = {
    //         username: email,
    //         password: password,
    //     }
    // }
    var resData = await 'token';
    return resData;
}
// END To chick isLohin OR token found MOHAJ

//START Data Processing WITH Token MOHAJ
const callApiWithToken = async (domain, data, methodName = 'POST', files = 'aaaaa') => {
    let token = files
    let resData = false;
    if (token != false && token != undefined && token != '' && token != null)
        resData = await callApi(domain, data, token, methodName, false);
    return resData;
};
//END Data Processing WITH Token MOHAJ

export { callApi, callApiWithToken };



// How I can use this platform ?
// ok if your metohd is "GIT" you can call api like that

// var data = await callApiWithToken(config.DOMAIN, { Page: 1, ItemsPerPage: 100 }, 'GET');
// just you need sent domain and data and method Type and you can set DOMAIN static in callAsyncAPI Function


// and about "POST" method you can call like that
// let ApiData = {
//     'name': 'MoahmmedHajeer',
//     'password': 'Eska@123',
// };
// var data = await callApiWithToken(config.DOMAIN, ApiData);

// Author : Mohammed Hajeer // Wireless ESKADENIA 