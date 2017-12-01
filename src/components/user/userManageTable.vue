<template>
    <div>
         <el-table
            :data="tableData"
            border
            style="width: 100%"
            :default-sort = "{prop:'date', order: 'descending'}"
            >
            <el-table-column
            prop="date"
            label="客户特征"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="客户"
            width="80">
            </el-table-column>
            <el-table-column
            prop="address"
            label="性别"
            width="70"
            :formatter="formatter">
            </el-table-column>
             <el-table-column
            prop="name"
            label="上次到店"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="所属人"
            width="80"
            :formatter="formatter">
            </el-table-column>
             <el-table-column
            prop="name"
            label="累计消费"
            sortable
            width="107">
            </el-table-column>
            <el-table-column
            prop="address"
            label="消费次数"
            width="107"
            :formatter="formatter">
            </el-table-column>
            <el-table-column
            prop="address"
            label="到店次数"
            width="107"
            :formatter="formatter">
            </el-table-column>
             <el-table-column
            prop="address"
            label="是否是会员"
            
            :formatter="formatter">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data()  {
            return {
                tableData: [{
                    // date: '2016-05-02',
                    // name: '王小虎',
                    // address: '上海市普陀区金沙江路 1518 弄'
                    // }, {
                    // date: '2016-05-04',
                    // name: '王小虎',
                    // address: '上海市普陀区金沙江路 1517 弄'
                    // }, {
                    // date: '2016-05-01',
                    // name: '王小虎',
                    // address: '上海市普陀区金沙江路 1519 弄'
                    // }, {
                    // date: '2016-05-03',
                    // name: '王小虎',
                    // address: '上海市普陀区金沙江路 1516 弄'
                    }],
    formatter(row, column){
                 return row.address;
            }
        }
    }
}
</script>

<style scoped>

</style>