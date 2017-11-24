<template>
   <!-- 首页导航 -->
   <div class="dataEnter">
        <main-nav></main-nav>
        <div class="content">
            <div class="tit">数据录入</div>
            <div class="dateForm">
                <!-- <div class="dataMenu">
                    <div>post数据</div>
                    <div>支出</div>
                </div> -->
                <el-row  class="dataMenu">
                    <el-col :span="12">
                        <div class="listMenu enter tab" @click="tabMenu"> 
                            数据录入
                        </div>
                    </el-col>
                    <el-col :span="12">
                      <div  class="listMenu pay"  @click="tabMenu">
                          支出
                      </div>  
                    </el-col>
                </el-row>
                <transition name="fade" mode="in-out">
                    <div class="dateEnterForm" v-show="isMeun">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="录入方式" prop="region">
                                    <el-select v-model="form.region" placeholder="请选择录入方式" size="100%" @change="change">
                                        <el-option  label="按天" value="date"></el-option>
                                        <el-option  label="按小时" value="datetime"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="选择时间">
                                <el-date-picker
                                        v-model="form.value1"
                                        :type="dateType"
                                        placeholder="选择日期时间"
                                >
                                </el-date-picker>
                                </el-form-item>
                                <el-form-item label="营业总额">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="交易笔数">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="销售件数">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="商品成本">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item class="submitbtn">
                                    <el-button type="primary" round @click="onSubmit">保存</el-button>
                                </el-form-item>
                    </el-form>  
                    </div>             
                </transition>
                 <transition name="fade" mode="in-out">
                    <div class="dateEnterForm" v-show="!isMeun">
                        <el-form ref="form1" :model="form1" label-width="80px">
                                     <el-form-item label="选择时间">
                                        <el-date-picker
                                                v-model="form.value1"
                                                  type="date"
                                                placeholder="选择日期时间"
                                        >
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="录入方式" prop="region">
                                        <el-select v-model="form.region" placeholder="请选择录入方式" size="100%" @change="change">
                                            <el-option  label="薪资" value="1"></el-option>
                                            <el-option  label="采购" value="2"></el-option>
                                            <el-option  label="店租" value="3"></el-option>
                                            <el-option  label="税费" value="4"></el-option>
                                            <el-option  label="水费" value="5"></el-option>
                                            <el-option  label="电费" value="6"></el-option>
                                            <el-option  label="其他" value="7"></el-option>
                                        </el-select>
                                    </el-form-item>
                                   
                                    <el-form-item label="支出金额">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="支出事由">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                     <el-form-item class="submitbtn">
                                    <el-button type="primary" round @click="onSubmit">保存</el-button>
                                    </el-form-item>
                                </el-form>
                        
                    </div>             
                </transition>
            </div>
        </div>
   </div>
</template>

<script>
import MainNav from "../components/MainNav";
export default {
  name: "dataEnter",
  components: { MainNav },
  data() {
    return {
      dateType: "datetime",
      isMeun: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        value1: ""
      },
      form1: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        value1: ""
      }
    };
  },
  methods: {
    // 菜单切换
    tabMenu(event) {
      $(".dataMenu .listMenu").removeClass("tab");
      if (event.target.innerText == "支出") {
        this.isMeun = false;
        $(".dataMenu .pay").addClass("tab");
      } else {
        $(".dataMenu .enter").addClass("tab");
        this.isMeun = true;
      }
    },
    onSubmit() {
      console.log("submit!");
    },
    change(value) {
      this.dateType = value;
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
@import "../../static/variable.scss";
.dataEnter {
  height: 100%;
  width: 100%;
}
.content {
  width: 1024px;
  background-color: #ffffff;
  margin: 0 auto;
  height: 969px;
  margin-top: 6px;
}
.tit {
  width: 964px;
  margin: 0 auto;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #4d4d4d;
  padding: 30px 0 20px 0;
  border-bottom: 1px solid #cccccc;
}
.dataMenu {
  width: 240px;
  height: 38px;
  background-color: #ffffff;
  border: solid 1px #48a7ff;
  margin: 30px auto;
  position: relative;
  z-index: 100;
  overflow: hidden;
  & .listMenu {
    height: 100%;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    &.tab {
      background-color: #48a7ff;
      color: #ffffff;
    }
  }
}
.dateEnterForm {
  width: 430px;
  margin: 0 auto;
  position: relative;
  & .el-form {
    position: absolute;
    top: 0;
  }
}
.dateEnterForm .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.submitbtn {
  text-align: center;
  & .el-button.el-button--primary.is-round {
    width: 200px;
  }
}
</style>