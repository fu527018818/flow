<template>
    <div class="app">
        <main-nav :indexMenu="'/userManage'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="searchTop">
                        <div class="manageTit">
                            <div>客户管理</div>
                        </div>   
                        <!-- 表单条件筛选 stat-->
                        <el-collapse-transition>
                            <div class="searchCondition" v-show="show">
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            性别
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.gender">
                                                <el-radio :label="''">全选</el-radio>
                                                <el-radio :label="'1'">男</el-radio>
                                                <el-radio :label="'0'">女</el-radio>
                                            </el-radio-group>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            上次到店
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.date" @change="radioCheckDate">
                                                <el-radio  :label="'今天'"></el-radio>
                                                <el-radio  :label="'昨天'"></el-radio>
                                                <el-radio  :label="'近七天'"></el-radio>
                                                <el-radio  :label="'本周'"></el-radio>
                                                <el-radio  :label="'上周'"></el-radio>
                                                <el-radio :label="'本月'"></el-radio>
                                                <el-radio  :label="'上月'"></el-radio> 
                                            </el-radio-group>
                                            <el-date-picker
                                                v-model="search.last_visit"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            所属人
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.service_user">
                                                <el-radio label="">全选</el-radio>
                                                <el-radio label="康师傅">康师傅</el-radio>
                                                <el-radio label="周小浪">康师傅</el-radio>
                                                <el-radio label="靳小弟">康师傅</el-radio>
                                            </el-radio-group>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            累计消费
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAllBuy" @change="handleCheckAllChange">全选</el-checkbox>
                                            <el-checkbox-group v-model="search.total_consumption" @change="handleCheckedChange">
                                                <el-checkbox v-for="item in total_consumptionValue"  :label="item"  :key="item">{{item == 10000?item+'元以上':item + '元'}}</el-checkbox>
                                            </el-checkbox-group> 
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            消费次数
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-checkbox :indeterminate="isIndeterminate_1" v-model="checkAllNum" @change="handleCheckAllNumChange">全选</el-checkbox>
                                            <el-checkbox-group v-model="search.consumption_sequence" @change="handleCheckedNumChange">
                                                <el-checkbox v-for="item in consumption_sequenceValue" :key="item" :label="item">{{item ==">10"? item +'次以上': item +"次"}}</el-checkbox>
                                            </el-checkbox-group>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            是否是会员
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.is_user">
                                                <el-radio :label="''"> 全选</el-radio>
                                                <el-radio :label="'1'">是</el-radio>
                                                <el-radio :label="'0'">否</el-radio>
                                            </el-radio-group>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-transition>
                        <!-- 表单条件筛选 end-->
                        <!-- 选中条件溢出到下面I really don't understand that this product is really fuck -->
                        <div class="manageSearch">
                            <el-row>
                                <el-col :span="3">
                                    <div class="conditionTit">
                                        筛选条件：
                                    </div>
                                </el-col> 
                                <!-- 标签 -->
                                <el-col :span="15">  
                                        <div class="conditionTag">
                                            <el-tag 
                                            type="info" closable
                                            :disable-transitions="false"
                                            v-if="!search.gender==''&&search.gender.length > 0"
                                            @close="handleClose(search.gender,'search.gender')"
                                            >
                                            <span>性别：{{search.gender==1?'男':'女'}}</span>    
                                            </el-tag>
                                            <el-tag 
                                            type="info"
                                            closable 
                                            v-if="!search.date==''&&search.date.length > 0"
                                            @close="handleClose(search.date,'search.date')"
                                            >
                                                <span>上次到店：{{search.date}}</span>    
                                            </el-tag>
                                            <el-tag 
                                            type="info"
                                            closable
                                            v-if="!search.service_user==''&&search.service_user.length > 0"
                                            @close="handleClose(search.service_user,'search.service_user')"
                                            >
                                                <span>所属人：{{search.service_user}}</span>    
                                            </el-tag>
                                            <el-tag
                                            type="info" 
                                            closable 
                                            v-if="!search.is_user==''&&search.is_user.length > 0"
                                            @close="handleClose(search.is_user,'search.is_user')"
                                            >
                                                <span>会员：{{search.is_user==1?'是':'否'}}</span>    
                                            </el-tag>
                                            <el-tag 
                                            type="info" 
                                            closable
                                            v-if="search.total_consumption.length > 0 && typeof search.total_consumption =='object'"
                                            @close="handleClose(search.total_consumption,'search.total_consumption')"
                                            >
                                            累计消费： <span  v-for='item in search.total_consumption' :key="item">{{item + '元/'}}</span>    
                                            </el-tag>
                                            <el-tag
                                            type="info"closable v-if="search.consumption_sequence.length > 0 && typeof search.consumption_sequence =='object'"
                                            @close="handleClose(search.consumption_sequence,'search.consumption_sequence')"
                                            >
                                            累计消费： <span  v-for='item in search.consumption_sequence' :key="item">{{ item + '次/'}}</span>    
                                            </el-tag>
                                        </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="searchBtn">
                                        <div @click="showColse">展开<i class="el-icon--right" v-bind:class="[show?'el-icon-arrow-up':'el-icon-arrow-down']"></i></div>
                                        <el-button type="primary" @click="submitBtn">
                                            筛选
                                        </el-button>
                                        <el-button type="primary" @click="closeSearch">
                                            清空
                                        </el-button>
                                    </div>
                                </el-col> 
                            </el-row>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div class="manageTable">
                        <div class="tableBox">
                            <user-manage-table></user-manage-table>
                        </div> 
                    </div>
                </div>
                 <div class="contentFooter"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import getDate from '../assets/js/dateSelect'
    import MainNav from '../components/MainNav';
    import userManageTable from '../components/user/userManageTable.vue'
    const  total_consumptionValue = ['0','1-999','1000-1999','2000-4999','5000-10000','10000']
    const  consumption_sequenceValue = ['0','1','2-4','5-10','>10']
    export default {
        name:"userDetails",
        components:{MainNav,userManageTable},
        data(){
            return {
                checkAllNum:false,
                checkAllBuy: false,
                show:true,
                search:{
                    gender:'',
                    date:"",
                    last_visit:[],
                    service_user:"",
                    total_consumption:[],
                    consumption_sequence:[],
                    is_user:"",
                    search:""
                },
                isIndeterminate:true,
                isIndeterminate_1:true,
                total_consumptionValue :total_consumptionValue,
                consumption_sequenceValue:consumption_sequenceValue
            }
        },
         methods: {
            showColse(){
                    this.show = !this.show;
            },// 多选表单简单交互
            closeSearch(){
                var search = this.search;
                for(var key in search){
                    if(search[key]=="last_visit"||search[key]=="total_consumption"||search[key]=="consumption_sequence"){
                            search[key] = [];
                    }else{
                        search[key]= '';
                    }
                }
            },
            submitBtn(){
                
            },
            handleClose(tag,val){
                switch(val){
                    case 'search.gender':
                        this.search.gender = "";
                    break;
                    case'search.date':
                        this.search.date = "";
                    break;
                    case 'search.service_user':
                        this.search.service_user="";
                    break;
                    case 'search.total_consumption':
                      this.search.total_consumption=[]
                    break;
                    case 'search.consumption_sequence':
                        this.search.consumption_sequence=[]
                    break;
                    case 'search.is_user':
                        this.search.is_user = []
                    break;
                }
            }, //日期单选操作
            radioCheckDate(val){
                 switch (val){
                     case '今天':
                           this.formatShowDate(getDate.getToday())
                     break;
                     case '昨天':
                           this.formatShowDate(getDate.getYesterdayDate())
                     break;
                     case '本周':
                           this.formatShowDate(getDate.getWeekDate())
                     break;
                     case '上周':
                           this.formatShowDate(getDate.getUpWeekDate())
                     break;
                     case '本月':
                           this.formatShowDate(getDate.getMonthDate())
                     break;
                     case '上月':
                           this.formatShowDate(getDate.getLastMonthDate())
                     break;
                     case '近七天':
                           this.formatShowDate(getDate.getToday())
                     break;
                 }
            },
            //格式化日期格式
            formatShowDate(obj){
                this.search.last_visit = [];
                for(var key in obj){
                    this.search.last_visit.push(obj[key])
                }
            },
             handleCheckAllChange(val) {
                    this.search.total_consumption = val ? total_consumptionValue:[];
                    this.isIndeterminate = false;
            },
            handleCheckedChange(value) {
                    let checkedCount = value.length;
                    this.checkAllBuy = checkedCount === this.total_consumptionValue.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.total_consumptionValue.length;
            },
            handleCheckAllNumChange(val){
                    this.search.consumption_sequence = val ? consumption_sequenceValue:[];
                    this.isIndeterminate_1 = false;
            },
            handleCheckedNumChange(value){
                    let checkedCount = value.length;
                    this.checkAllNum = checkedCount === this.consumption_sequenceValue.length;
                    this.isIndeterminate_1 = checkedCount > 0 && checkedCount < this.consumption_sequenceValue.length;
            }
        },
        watch:{
           search:{
                handler:function (newValue,oldValue){
                    console.log(newValue)
                    console.log(oldValue)
                },
                deep:true
           }
        },
        computed:{
            
        },
        created (){
            
           
        }
    }
</script>

<style scoped lang="scss">
    .manageTit{
        height:77px;
        background-color: #ffffff;
        & > div:nth-child(1){
            display: inline-block;
            line-height: 77px;
            font-family: MicrosoftYaHei;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #4d4d4d;
            margin-left: 30px;
        }
    }
    .searchTop{
        width: 1024px;
    }
    .manageSearch{
        background-color: #ffffff;
        line-height: 77px;
    }
    .searchCondition{
        width:100%;
        height: 262px;
        background-color: #ffffff;
        transition: all 1.5s inherit;
        padding: 0 30px;
        box-sizing: border-box!important;
    }
    .conditionTit{
        padding-left: 30px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;

    }
    .conditionTag{
        line-height: 50px;
        width: 100%;
        height: 100%;
        min-height: 77px;
    }
    .searchBtn{
        font-family: MicrosoftYaHeiLight;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        cursor: pointer;
        user-select: none;
        & > div:nth-child(1){
            color: #808080;
            font-size: 14px;
            display: inline-block;
            margin: 0 10px;
        }
    }
    .searchList{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #cccccc;
        overflow: hidden;
       & .searchName{
           font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #808080;
       }
    }
    .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange{
        margin-left: 40px;
    }
    .el-checkbox-group{
        display: inline-block!important;
        margin-left: 30px!important;
    }
    // table start
    .manageTable{
        width: 100%;
        height: 1500px;
        background-color: #ffffff;
        margin-top: 6px;
        & > .tableBox{
            padding: 30px;
        }
    }
    // table end
</style>