<template>
    <div class="app">
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                    <div>选择门店</div>
                    <div>请选择你所在的门店信息</div>
                    <div class="selectBox">
                        <div @click="goBack">
                             取消
                        </div>
                        <div>
                            <img :src="userInfo.avatar" alt="用户头像">
                        </div>
                        <div>{{userInfo.real_name}}</div>
                        <div>
                             <el-select v-model="value"  id="selectShop" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <el-input v-model="input" placeholder="请输入店铺编号"></el-input>
                        </div>
                        <div>
                             <el-button type="primary">申请</el-button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex';
    export default {
        name:"selectShop", //选择门店
        components:{},
        data(){
            return{
                input:"",
                options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
            }
        },
        computed:{
            ...mapGetters([
                'userInfo',
                'shop_list'
            ])
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .contentBox{
         background-color: #ffffff!important;
        }
    .contentBox_child{
        & > div:nth-child(1){
            text-align: center;
            font-size: 40px;
            letter-spacing: 2px;
            color: #4c4c4c;
            padding-top:6%;
        }
        & > div:nth-child(2){
            font-size: 16px;
            letter-spacing: 1px;
            color: #808080;
            text-align: center;
        }
        .selectBox{
            margin: 0 auto;
            width: 501px;
            margin-top: 40px;
            box-shadow: 0px 0px 6px 0px 
	#d2dce0;
            & > div:nth-child(1){
                line-height: 45px;
                padding-left: 33px;
                position: relative;
                font-size: 14px;
                letter-spacing: 0px;
                color: #4c4c4c;
                user-select: none;
                cursor: pointer;
                &::before{
                    content: "";
                    width:10px;
                    height: 20px;
                    background: url('../../assets/img/callback.png') 100% 100% no-repeat;
                    position: absolute;
                    top: 50%;
                    transform: translate(0,-50%);
                    left:18px;
                }
            }
            & >div:nth-child(2){
                height: 150px;
                text-align: center;
                margin-top:35px;
                & > img{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                     box-shadow: 0px 0px 6px 0px  #d2dce0;
                    
                }
            }
            & > div:nth-child(3){
                    font-size: 18px;
                    letter-spacing: 1px;
                    color: #4c4c4c;
                    text-align: center;
                    margin-top: 12px;
            }
            & > div:nth-child(4){
                    text-align: center;
                    padding: 40px 0 12px 0;
            }
            & > div:nth-child(5){
                   width: 300px;
                   margin: 0 auto;
            }
             & > div:nth-child(6){
                 margin-top: 20px;
                 padding-bottom: 80px;
                 text-align: center;
                & > .el-button{
                    padding:12px 135px!important;
                }
            }
        }
    }
    
</style>