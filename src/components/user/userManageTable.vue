<template>
    <div v-if="lists">
         <el-table
                :data="lists"
                border
                style="width: 100%;text-align:center;"
                ref = "userTable"
                height="500"
                :default-sort = "{prop:'date', order: 'descending'}"
                @sort-change="sortChange"
                @row-click="rowClick"
            >
            <el-table-column
                prop="userTrait"
                label="客户特征"
                width="230"
                >
                <template slot-scope="scope">
                    <el-tag
                      disabled
                      :type="scope.row.userTrait[0]=='活跃'?'primary':'info'"
                    >
                     {{scope.row.userTrait[0]}}
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.userTrait[1]=='会员'?'danger':'info'"
                    >
                     {{scope.row.userTrait[1]}}
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.userTrait[2]=='5星'||'4星'||'3星'||'2星'||'1星'?'warning':'info'"
                    >
                     {{scope.row.userTrait[2]}}
                    </el-tag>
                    <el-tag
                      disabled
                      :type="scope.row.userTrait[3]=='新客'||'老客'?'success':'info'"
                    >
                     {{scope.row.userTrait[3]}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                prop="real_name"
                label="客户"
                width="80">
            </el-table-column>
                <el-table-column
                prop="gender"
                label="性别"
                width="70"
                :formatter="formatGender"
                >
                </el-table-column>
                <el-table-column
                prop="last_visit"
                label="上次到店"
                width="150"
                :sortable="'custom'"
                >
                </el-table-column>
                <el-table-column
                prop="manager"
                label="所属人"
                width="80"
                >
                </el-table-column>
                <el-table-column
                prop="total_consumption"
                label="累计消费"
                :sortable="'custom'"
                width="107">
                </el-table-column>
                <el-table-column
                prop="consumption_sequence"
                label="消费次数"
                width="107"
                :sortable="'custom'"
            >
            </el-table-column>
                <el-table-column
                prop="visit_count"
                label="到店次数"
                width="107"
                :sortable="'custom'"
           >
            </el-table-column>
             <el-table-column
                prop="is_menber"
                label="会员"
                width="107"
                :formatter="formatMenber">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        props:['lists'],
        data()  {
            return {
                tableData: [{
                    id:'1',
                    userTrait:['活跃','会员','5星','老客'], //必须按顺序
                    name: '王小虎',
                    gender:'1',
                    last_visit:'2017-11-24 15:24:49',
                    manager:"张三",
                    visit_count:10,
                    total_consumption:"1234",
                    consumption_sequence:"123",
                    is_menber:"1"
                    },{
                    id:'2',
                    userTrait:['活跃','会员','5星','老客'], //必须按顺序
                    name: '王小虎',
                    gender:'1',
                    last_visit:'2017-11-24 15:24:49',
                    manager:"张三",
                    visit_count:10,
                    total_consumption:"1234",
                    consumption_sequence:"123",
                    is_menber:"1"
                    }],
            formatter(row, column){
                        return row.address;
                    },
            formatGender(row,column){
                return row.gender=='1'?'男':'女';
            },
            formatMenber(row,column){
                return row.is_menber=="1"?'是':'否';
            },
            
        }
    },
    methods:{
        sortChange(column,prop,order){
            console.log(column)
        },
        rowClick(row,event,column){
            this.$router.push({name:"userDetails",params:{id:row.id}})
        }
    }
}
</script>

<style scoped lang="scss">

</style>