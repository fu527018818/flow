<template>
    <div class="manageTable">
        <div class="tableBox" v-if="lists">
            <el-table
            :data="lists"
            border
            style="width: 100%"
            ref = "userTable"
            max-height="500"
            :header-row-class-name="tableHeade"
            :default-sort = "{prop:'date', order: 'descending'}"
            >
                <el-table-column
                prop="id"
                label="流水号"
                 >
                 </el-table-column>
                 <el-table-column
                prop="add_time"
                label="录入时间"
                width="160"
                >
              </el-table-column>
              <el-table-column
                prop="type_name"
                label="支出类别"
                >
              </el-table-column>
              <el-table-column
                prop="input_time"
                label="支出时间"
                width="160"
                >
              </el-table-column>
              <el-table-column
                prop="price"
                label="金额"
                >
              </el-table-column>
                <el-table-column
                prop="reason"
                label="支出事由"
                >
              </el-table-column>
              <el-table-column
                prop="real_name"
                label="录入人"
                >
              </el-table-column>
            </el-table>
        </div> 
    </div>
</template>

<script>
    export default {
        props:['lists'],
        name:'expenditures',//订单详情表单页
        data(){
            return{

            }
        },
        created(){
            console.log(this.lists)
        },
        methods:{
           tableHeade(){
          return 'headerTr'
         }
        }
    }
</script>

<style scoped lang="scss">
      .manageTable{
        width: 100%;
        height: 1500px;
        background-color: #ffffff;
        margin-top: 6px;
        & > .tableBox{
            padding: 30px;
        }
    }
</style>