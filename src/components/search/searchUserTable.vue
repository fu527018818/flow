<template>
    <div v-if="userSearch.lists">
         <el-table
                :data="userSearch.lists"
                border
                style="width:100%"
                ref = "userTable"
                height="500"
                :default-sort = "{prop:'date', order: 'descending'}"
                @sort-change="sortChange"
                @row-click="rowClick"
                :header-row-class-name="tableHeade"
            >
            <el-table-column
                prop="userTrait"
                label="客户特征"
                width="280"
                >
                <template slot-scope="scope">
                    <el-tag
                      disabled
                      :type="scope.row.is_active=='1'?'primary':'info'"
                    >
                     活跃
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.is_member=='1'?'danger':'info'"
                    >
                     会员
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.level=='0'?'info':'warning'"
                    >
                     {{scope.row.level+'星'}}
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.is_new_guest=='1'?'success':'info'"
                    >
                     新客
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.is_new_guest=='1'?'primary':'info'"
                    >
                     {{scope.row.guest_type=="0"?'访客':(scope.row.guest_type=="1"?'老客':'回头客')}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                prop="real_name"
                label="客户"
                width="80"
                >
            </el-table-column>
                <el-table-column
                prop="gender"
                label="性别"
                :formatter="formatGender"
                width="50"
                >
                </el-table-column>
                <el-table-column
                prop="last_visit"
                label="上次到店"
                :sortable="'custom'"
                width="180"
                >
                </el-table-column>
                <el-table-column
                prop="total_consumption"
                label="累计消费"
                :sortable="'custom'"
                width="160"
                :formatter="formatMoney"
                >
                </el-table-column>
                <el-table-column
                prop="consumption_sequence"
                label="消费次数"
                :sortable="'custom'"
                width="150"
            >
            </el-table-column>
                <el-table-column
                prop="visit_count"
                label="到店次数"
                :sortable="'custom'"
                width="120"
           >
            </el-table-column>
             <el-table-column
                prop="is_menber"
                label="会员"
                width="50"
                :formatter="formatMenber">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
    export default {
        data()  {
            return {
            formatter(row, column){
                        return row.address;
                    },
            formatGender(row,column){
                return row.gender=='1'?'男':'女';
            },
            formatMenber(row,column){
                return row.is_menber=="1"?'是':'否';
            },
            formatMoney(row,column){
            return '￥'+ row.total_consumption
        }
        }
    },
    computed:{
        ...mapState({
            userSearch:state=>state.search.userSearch
        })
    },
    created(){
    },
    methods:{
        sortChange(column,prop,order){
            console.log(column)
        },
        rowClick(row,event,column){
            this.$router.push({name:"userDetailsInfo",params:{id:row.id}})
        },
        tableHeade(){
              return 'headerTr'
    }
    },
    watch:{
       userSearch:function(val){
           console.log(val)
       } 
    }
}
</script>

<style scoped lang="scss">

</style>