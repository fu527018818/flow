<template>
     <div class="titCutBox">
        <el-row>
            <el-col :span="3">
                <div class="tit">
                    {{tit.tit}}
                </div>
            </el-col>
            <el-col :span="21">
            <div class="rightSearch">
                    <div class="search">
                        <div class="f-input">
                                <input type="text" validateevent="true" :placeholder="tit.titIpt">
                        </div>
                        <span class="searchIcon">
                            <i class="iconfont icon-serach"></i>
                        </span>
                    </div>
                    <div class="pagingBox">
                        <el-button size="mini" plain icon="el-icon-arrow-left"></el-button>
                        <input type="text" class="pagesNum" v-model="searchPages.current">
                        <el-button size="mini" plain> <i class="el-icon-arrow-right el-icon--right"></i></el-button>
                        <a @click="changPages"  class="tolPages">共<span>2323</span>页</a>
                        <div v-if="isPages" class="changPageBox">
                            <span class="changCurrenPage">
                                <input type="text">
                                <span class="advance">Go</span>
                            </span>
                            <span class="eachPage">每页</span>
                            <el-select v-model="searchPages.limit"  id="indent">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value"
                                :label="item.label">
                                </el-option>
                            </el-select>
                            <img @click="changPages" class="cutShow" src="../../assets/img/cut_pages.png" alt="切换按钮">
                        </div>
                        </div>
                        </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:"searchPage", //分页搜索组件
        props:['tit'],
        data(){
            return{
                 isPages:false,
                currentPage3: 5,
                options: [{
                        value: 10,
                        label:10
                        }, {
                        value: 20,
                        label: 20
                        }, {
                        value:30,
                        label:30
                        }, {
                        value:40,
                        label:40
                        }, {
                        value:50,
                        label:50
                        }],
                
                searchPages:{
                    current:1,
                    limit:10
                }
            }
        },
        methods:{
             changPages(){
          this.isPages = !this.isPages;
            },
            handleSizeChange(val){
                console.log(val)
            },
            handleCurrentChange(val){
                console.log(val)
            }
        },
        created(){
            this.$emit('changePagesSearch',this.searchPages);
        }
    }
</script>

<style scoped lang="scss">
  .titCutBox{
        background-color: #ffffff;
        height: 77px;
        line-height: 77px;
        & .tit{
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #4d4d4d;
            padding-left: 30px;
        }
    }
    .rightSearch{
        height:77px;
        text-align: right;
        padding-right:30px;
        & .search{
            width: 250px;
            height: 30px;
            position: relative;
            display: inline-block;
            & input{
                  vertical-align:middle;
                  display: table-cell;
                  border:0;
                  height:30px;
                  padding: 0;
                  width: 196px;
                  box-sizing: border-box;
                  background-color: #ffffff;
                  border: 1px solid #dcdfe6;
                  -webkit-appearance:none;
                  text-indent: 10px;
            }
           & .searchIcon{
               cursor: pointer;
               width:54px;
               height: 30px;
               display:inline-block;
               background-color: #4198ff;
               position: absolute;
               right: 0;
               top:0;
               & .icon-serach{
                 color: #ffffff;
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 font-size: 20px;
                 transform: translate(-50%,-50%);
                 line-height: 0;
               }
           }
        }
      & .pagingBox{
        display: inline-block;
        margin-left: 20px;
        & .pagesNum{
            width: 28px;
            border: 1px solid #dcdfe6;
            height: 25px;
            position: relative;
            top:1px;
            text-align: center;
            font-size: 14px;
            letter-spacing: 0px;
            color: #808080;
        }
        & .el-button--mini, .el-button--mini.is-round{
            padding: 7px 10px;
            border-radius: 0;
        }
        & .el-icon-arrow-right.el-icon--right{
            margin:0;
        }
        & .tolPages{
                font-size: 14px;
                letter-spacing: 0px;
                color: #4c4c4c;
                cursor: pointer;
                text-decoration:underline;
        }
        & .changPageBox{
            height:77px;
            display: inline-block;
               padding-left:5px;
            & .changCurrenPage{
            position: relative;
            display: inline-block;
            height: 28px;
            line-height: 1;
            width: 78px;
            text-align: left;
            border: solid 1px #d2dce0;
            top:2px;
                & input{
                    width: 49px;
                    border: none;
                    height: 26px;
                    text-align: center;
                    // font-size: 14px;
                    color: #808080;
                }
             & .advance{
                 position: absolute;
                 right: 0;
                 top:50%;
                 transform: translate(0,-50%);
                 background-color: #4198ff;
                 padding: 9px 7px;
                 font-size: 12px;
                 cursor: pointer;
                letter-spacing: 0px;
                color: #ffffff;
                user-select: none;
                }
            }
            & .el-select{
             width: 60px;
             line-height: 1px;
        
            }
            & .el-input__inner{
                 height:30px!important;
             }
            & .cutShow{
                position: relative;
                top:9px;
                cursor: pointer;
            }
            & .eachPage{
                font-size: 14px;
                color: #4c4c4c;
                padding-left: 3px;
            }
        }
        }
    }
</style>