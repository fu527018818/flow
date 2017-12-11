<template>
    <!-- 页面头部导航 -->
    <div class="app">
        <main-nav :indexMenu="'/statistics'"></main-nav>
        <div class="contentBox">
            <div class="contentBox_child">
                <div class="content">
                    <div class="dateSearchBox">
                        <el-row>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                <el-form :inline="true" id="selAreaForm">
                                    <el-form-item label="查询">
                                        <el-select  @change="changeShop" v-model="list_current" id="selArea" placeholder="请选择门店">
                                            <el-option v-for="item in shop_list" :key="item.id" :label="item.shop_name" :value="item.id"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    </el-form>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="grid-content bg-purple">
                                    <router-link :to="{name:'dataEnter'}" type="primary" class="el-button el-button--primary" id="dataEntering">数据录入</router-link>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- <div class="contentFooter"></div> -->
            </div>
        </div>
    </div>  
</template>

<script>
import MainNav from '../../components/MainNav';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
        name:"statistics",
        components:{MainNav},
        data (){
            return {
                list_current:""
            }
        },
        computed:{
            ...mapGetters([
                'shop_list',  //店铺列表
                'shop_list_current'
           ])
        },
        methods:{
            changeShop(val){
                this.$store.dispatch('cut_shop_list_current',val);
            } 
        }
    }
</script>

<style scoped lang="scss">
    .dateSearchBox{
        width: 100%;
        height: 80px;
        line-height: 80px;
        background-color: #ffffff;
        }
    .el-form-item{
        margin: 0;
    }
</style>