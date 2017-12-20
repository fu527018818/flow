<template>
    <div class="manageTable">
        <div class="tableBox" v-if="lists">
            <el-table
            :data="lists"
            border
            style="width: 100%;text-align:center;"
            ref = "userTable"
            height="500"
            :default-sort = "{prop:'date', order: 'descending'}"
            >
                <el-table-column
                prop="order_no"
                label="订单编号"
                >
                </el-table-column>
                <el-table-column
                prop="order_datetime"
                label="时间"
                width="200"
                >
              </el-table-column>
              <el-table-column
                prop="order_price"
                label="订单金额"
                >
              </el-table-column>
              <el-table-column
                prop="member_name"
                label="顾客"
                >
              </el-table-column>
              <el-table-column
                prop="member_no"
                label="会员编号"
                >
              </el-table-column>
              <el-table-column
                prop="sale"
                label="折扣"
                >
              </el-table-column>
              <el-table-column
                prop="coupon"
                label="优惠卷"
                >
                </el-table-column>
                <el-table-column
                prop="shop_name"
                label="门店"
                >
              </el-table-column>
              <el-table-column
                prop="cashier_desk"
                label="收银台"
                >
              </el-table-column>
            </el-table>
        </div> 
    </div>
</template>

<script>
    export default {
        props:['lists'],
        name:'indentTable',//订单流水表单页
        data(){
            return{

            }
        },
        created(){
            console.log(this.lists)
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