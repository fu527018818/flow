<template>
    <div class="manageTable">
        <div class="tableBox" v-if="lists">
             <el-table
            :data="lists"
            border
            style="width: 100%"
            ref = "userTable"
            max-height="300"
            :header-row-class-name="tableHeade"
            :default-sort = "{prop:'date', order: 'descending'}"
            >
            <el-table-column
                prop="request_time"
                label="申请时间"
                 >
             </el-table-column>
                 <el-table-column
                prop="real_name"
                label="申请人"
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="申请职务"
                >
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别"
                :formatter="formatGender"
                >
              </el-table-column>
              
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号"
                >
              </el-table-column>
               <el-table-column
                prop="shop_name"
                label="申请加入门店"
                >
              </el-table-column>
              
              <el-table-column
                  label="审核"
                >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        :disabled="scope.row.status=='1'?true:false"
                        :type="scope.row.status=='1'? '':'primary'"
                        @click="handleEdit(scope.$index, scope.row)">
                        {{scope.row.status=='1'?'已通过':'通过'}}
                    </el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {personnelModifyApply} from '../../api/global';
    export default {
        name:"staffTable", //职员审核表格
        props:['lists'],
        data(){
           return{

           }
        },
        methods:{
            tableHeade(){
              return 'headerTr'
           },
            handleEdit(index,row){
               personnelModifyApply({
                   user_id:row.id,
                   shop_id:row.shop_id,
                   apply:row.status =="1"?'':'1'
               })
               .then(res=>{
                     if(res.status =="200"){
                       this.$emit('changeStatus');
                   }
               })
            },
            formatGender(row,column){
              return row.gender=='1'?'男':'女';
            }
        }
    }
</script>

<style scoped lang="scss">
      .manageTable{
        width: 100%;
        height: 800px;
        background-color: #ffffff;
        margin-top: 6px;
        & > .tableBox{
            padding: 30px;
        }
    }
</style>