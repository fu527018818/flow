import axios from 'axios';
import config from '../api/config';
import store from '../store/index';
import JsEncrypt from 'jsencrypt/bin/jsencrypt';
import CryptoJS from 'crypto-js';
const service = axios.create(config);
// RSA公钥
var publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcaVfbycoF4yfXfSY6x6dOijO8
in2Ibe9XKxYU64wZnczTCv32AkEQty2U777jpswOmsQSqQ+wZrkBftgmSNq+u0d3
HEvVFmSALSI7u/MLrHHHYBggTi2iisDRAn0wjRMzsm1+prFPjV4tFSe1+HPeH0Dv
ZFfyaGOgXJ7hsqp2dwIDAQAB`;
// request拦截器
service.interceptors.request.use(config => {
      var data = config.data;
      console.log(data)
  function  official(){
        var checkUrl = config.url.split('/');
        var loginUrl = checkUrl[checkUrl.length-1];
        var obj = {} 
        obj.client= "pc";
        obj.version ="1.0";
        // 登录之前
        if(loginUrl=="id"||loginUrl=="login"){
              var encrypt = new JsEncrypt.JSEncrypt();
              encrypt.setPublicKey(publicKey);
              obj.params  = encrypt.encrypt(JSON.stringify(data));
          }else{
            // 判断登录成功后
              data  = objKeySort(data);
              if(!store.getters.token==""||ls.get('token')&&!store.getters.userInfo==""||ls.get('secret')){
                          //优先在vuex里面取值防止localstange被清除  
                  var keyAccept =  CryptoJS.enc.Utf8.parse( store.getters.secret.accept||ls.get('secret').accept);
                        //数据加密
                  function encrypt(){
                    var str = CryptoJS.AES.encrypt(JSON.stringify(data),keyAccept,{
                          mode:CryptoJS.mode.ECB
                      }).toString();
                      return str
                  }
                obj.params = encrypt();
                obj.sign = CryptoJS.MD5(JSON.stringify(data)).toString();
                obj.id= ls.get('userId');
                obj.token = store.getters.token||ls.get('token');
              }
          }
          //排序算法a-z;
          function objKeySort(arys) { 
            //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
            var newkey = Object.keys(arys).sort();　　 
            //console.log('newkey='+newkey);
            var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
            for(var i = 0; i < newkey.length; i++) {
                //遍历newkey数组
                newObj[newkey[i]] = arys[newkey[i]]; 
                //向新创建的对象中按照排好的顺序依次增加键值对
  
            }
            return newObj; //返回排好序的新对象
        }
        config.data = obj;
    }
    // function test(){
    //   var obj = {} 
    //   obj.client= "pc";
    //   obj.version ="1.0";
    //   obj.params = data;
    //   config.data = obj; 
    // }
    // test();
      official();
      return config
  }, error => {
    console.log(error);
    Promise.reject(error);
  });
  
  // response拦截器
  service.interceptors.response.use(
    response => {
      //登录之后返回数据进行解密
        if(!store.getters.token==""||ls.get('token')&&!store.getters.userInfo==""||ls.get('secret')){
            //aes解密
            var keyResponse = CryptoJS.enc.Utf8.parse(store.getters.secret.response||ls.get('secret').response);
              var str =  CryptoJS.AES.decrypt(response.data.data,keyResponse,{
                  mode: CryptoJS.mode.ECB
                })
            var data = JSON.parse(str.toString(CryptoJS.enc.Utf8));
            store.commit('SET_TOKEN',data.token)
            response.data = data;
      }
      console.log('返回前数据对象response: %o',response)
      return response
    },
    /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
    error => {
      console.log('err' + error);
      return Promise.reject(error);
    }
  );
  export default service