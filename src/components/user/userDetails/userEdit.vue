<template>
    <div class="dateEnterForm">
        <el-form v-if="currentInfo"  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px">
            <div>
                <el-form-item label="促销敏感" prop="price" class="wh_350">
                    <el-input v-model.number="ruleForm.sales_promotion"></el-input>
                </el-form-item>
            </div>
             <div class="mline">
                 <el-form-item label="消费水平" prop="price" class="wh_350">
                    <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                </el-form-item>
             </div>
             <div class="impressionBox mline">
                 <div>
                     用户印象
                 </div>
                 <div>
                    <el-tag
                    :key="tag"
                    v-for="tag in ruleForm.dynamicTags"
                    type='info'
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                    </el-tag>
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加新标签</el-button>
                 </div>
             </div>
              <div class="mpd twoFont">
                <el-form-item label="会员" prop="price" class="wh_350">
                    <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                </el-form-item>
              </div>
              <div class="twoFont">
                    <el-form-item label="生日" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="手机" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
               <div class="twoFont">
                    <el-form-item label="身高" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
               <div class="twoFont">
                    <el-form-item label="三围" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="鞋码" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="颜色" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="风格" prop="price" class="wh_350">
                        <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                    </el-form-item>
                </div>
           
        </el-form> 
    </div>
</template>

<script>
    import {mapGetters,mapState} from 'vuex';
    export default {
        name:"userEdit", //用户编辑
        data(){
            return{
              ruleForm:{
                  sales_promotion:"",
                  consumption_grade:"",
                  dynamicTags:['标签一', '标签二', '标签三']
              },
               inputVisible: false,
               inputValue: '',
               rules:{

              }  
            }
        },
        computed:{
            ...mapState({
                currentInfo:state=>state.user.currentInfo
            })
        },
        methods:{
            handleClose(tag) {
                this.ruleForm.dynamicTags.splice(this.ruleForm.dynamicTags.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                this.ruleForm.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        },
        created(){
            console.log(this.currentInfo)
        },
        watch:{
            currentInfo:function(val){
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .dateEnterForm{
        padding: 30px  30px 0 60px;
       & .el-form-item.wh_350{
           width: 350px;
       }
       & .mline{
           border-bottom: 1px dashed #cccccc;
       }
       & .mpd{
           padding-top: 20px;
       }
       & .impressionBox{
           text-align: left;
           padding-bottom:20px;
           &>div:nth-child(1){
               color: #606266;
               font-size: 14px;
               line-height: 53px;
               padding-left: 12px;
           }
           & >div:nth-child(2){
               max-height:100px;
           }
       }
    }
    .el-tag + .el-tag {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>