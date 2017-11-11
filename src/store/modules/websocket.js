const state = {
   connect:false
}
const mutations={
    'SOCKET_CONNECT'(state) {
      console.log('Socket连接成功')
      state.connect = true;
  },
    'SOCKET_UPDATE_ONLINE_COUNT'(state,info){
      console.log(info+'111')
  }
}
const actions={
  // socketConnect(context, value) {
  //   console.log('连接123');
  // },
  // socketUpdate_online_count(context, value) {
  //   console.log(1111)
  //   console.log(value);
  // }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}