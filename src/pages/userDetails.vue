<template>
    <div>
        <main-nav :indexMenu="'/userDetails'"></main-nav>
        <div class="content">
            <div class="detailsTit">
                客户详情
            </div>
            <div class="userDetailBox">
                <el-row class="userDetail">
                    <!-- 详情左侧 start -->
                    <el-col :span="9" class="userDetailLeft">
                        <div class="detailLeft">
                            <div class="userAvatar">
                                <img :src="details.avatar" alt="客户头像">
                                <img class="isMember" src="../assets/img/user/is_menber.png" alt="">
                            </div>
                            <div class="userName">
                                {{details.real_name}}
                            </div>
                            <div class="userDesc">
                                男-27岁-福建-厦门
                            </div>
                            <!-- 评星 -->
                            <div class="rateBox" id="rateBox">
                                <el-row>
                                    <el-col :span="12">
                                        <el-rate
                                         v-model="details.level"
                                         show-score
                                         text-color="#ff9900"
                                         disabled-void-color="#cccccc"
                                         score-template="{value}"
                                         disabled>
                                    </el-rate>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="beautyValue">
                                            <div class="beauty">
                                                {{details.active_value}}
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <ul class="basicDetails">
                                <li>
                                    <el-row>
                                        <el-col :span="8" class="listLeft">
                                            姓名
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.real_name}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row>
                                        <el-col :span="8" class="listLeft">
                                            会员
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.member_no}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                   <el-row>
                                        <el-col :span="8" class="listLeft">
                                            生日
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.birthday}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                   <el-row>
                                        <el-col :span="8" class="listLeft">
                                            手机
                                        </el-col>
                                        <el-col :span="16" class="listRight" v-if ="isIphone" style="color:#4198ff">
                                            {{formatPhone}} 
                                            <el-button  class="lookIphone"  type="primary" @click="lookIphone">查看</el-button>
                                        </el-col>
                                         <el-col :span="16" class="listRight" v-else>
                                            {{details.phone}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li class="dashed_line">
                                   <el-row>
                                        <el-col :span="8" class="listLeft module1">
                                            职业
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.career}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                   <el-row>
                                        <el-col :span="8" class="listLeft module1">
                                            消费档次
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.consumption_grade}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                   <el-row>
                                        <el-col :span="8" class="listLeft module1">
                                            是否有小孩
                                        </el-col>
                                        <el-col :span="16" class="listRight">
                                            {{details.has_children}}
                                        </el-col>
                                    </el-row>
                                </li>
                                <li class="favorite_brand">
                                   <el-row class="dashed_line">
                                        <el-col :span="24" class="listLeft module1">
                                            品牌偏好
                                        </el-col>
                                        <el-row :gutter="40">
                                            <el-col :span="8" v-for="item in details.favorite_brand" :key="item">
                                                <div class="grid-content bg-purple">
                                                    <img :src="item" alt="喜爱品牌图片">
                                                </div>
                                            </el-col>
        
                                        </el-row>
                                    </el-row>
                                </li>
                                <li class="userTag">
                                   <el-row  class="dashed_line">
                                        <el-col :span="24" class="listLeft module1">
                                            客户标签
                                        </el-col>
                                        <el-col :span="24">
                                            <div>
                                                <el-tag v-for="item in details.tag" :key="item"  type="info">{{item}}</el-tag>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li class="promotion_proposal">
                                   <el-row  class="dashed_line">
                                        <el-col :span="24" class="listLeft module1">
                                            促销建议
                                        </el-col>
                                        <el-row :gutter="40">
                                            <el-col :span="24" class="promotion_proposal_list">
                                                <div class="grid-content bg-purple">
                                                    <img :src="details.promotion_proposal" alt="">
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                </li>
                                <li class="userManager">
                                   <el-row>
                                        <el-col :span="24" class="listLeft module1">
                                            <div>
                                                <img class="avatar" :src="details.manager.avatar" alt="">
                                                <span class="userName">服务员：<em>{{details.manager.name}}</em></span>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                    <!-- 详情左侧 end -->
                    <!-- 详情右侧  start-->
                    <el-col :span="15" class="userDetailRight">
                        <div class="rightBox">
                            <div class="rightMenu">
                                <el-radio-group v-model="is_menus" @change="changeMenu">
                                <el-radio-button label="userDetailsInfo">用户信息</el-radio-button>
                                <el-radio-button label="userDetailsConsume">消费记录</el-radio-button>
                                <el-radio-button label="userDetailsServe">服务记录</el-radio-button>
                                <el-radio-button label="userDetailsPortrait">客户肖像</el-radio-button>
                                <el-radio-button label="userDetailsPromotion">促销建议</el-radio-button>
                                </el-radio-group>  
                            </div>
                            <router-view></router-view>
                        </div>
                    </el-col>
                    <!-- 详情右侧 end-->
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNav from '../components/MainNav';
    export default {
        name:"userDetails",
        components:{MainNav},
        data(){
            return {
                is_menus:"userDetailsInfo",
                details:{
                    real_name:"靳小迪",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512392706466&di=342f1df0fc28439a7277db86581ad25c&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160520%2F1463697462330461.jpg",
                    short_info:"男-27岁-福建-厦门",
                    level:3.7,
                    active_value:1234,
                    member_no:"LY201710171234560001",
                    birthday:"1989-12-12",
                    phone:"15505952110",
                    career:"ui设计师",
                    consumption_grade:"高",
                    has_children:"有，男，12岁",
                    sales_promotion:"高，易接受促销建议",
                    favorite_brand:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512464184447&di=0b6876da594d1c586a2463f6e1679fc5&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffd039245d688d43fe757c123771ed21b0ff43b60.jpg",
                       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512464184446&di=dc7ff252e47b26498b959849584f3858&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0d338744ebf81a4c11abdb21dd2a6059242da6b8.jpg",
                       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512464184446&di=cb9774e25d64ce54fc46f157c119cf81&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C640%252C866%2Fsign%3Dc9ab87feb4096b63955604103103ab74%2F730e0cf3d7ca7bcbc9ab87feb4096b63f724a80b.jpg",
                       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512464184446&di=dc7ff252e47b26498b959849584f3858&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0d338744ebf81a4c11abdb21dd2a6059242da6b8.jpg",
                       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512464184446&di=cb9774e25d64ce54fc46f157c119cf81&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C640%252C866%2Fsign%3Dc9ab87feb4096b63955604103103ab74%2F730e0cf3d7ca7bcbc9ab87feb4096b63f724a80b.jpg" 
                    ],
                    promotion_proposal:[
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512465430117&di=60bf5ed7a86e1d9910639890f11d98b8&imgtype=0&src=http%3A%2F%2Fimg.hr987.com%2FStImge%2F62116%2Fpp18051_8.gif"
                    ],
                    tag:["小清新","大傻逼","无敌","闷骚","桀骜不驯"],
                    manager:{
                        avatar:"http://img5.imgtn.bdimg.com/it/u=547138142,3998729701&fm=27&gp=0.jpg",
                        name:"靳小迪",
                        history_avatar:["","",""]
                    }

                },
                isIphone:true
            }
        },
         methods: {
            lookIphone(){
                this.isIphone = false;
            },
            changeMenu(val){
                // 菜单val值不变
                this.$router.push({name:val})
            }
        },
        computed:{
            formatPhone(){
                return this.details.phone.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3");
            }
        },
        created(){
                console.log(("18960120350".replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3")));
        }
    }
</script>

<style scoped lang="scss">
    .content{
        width: 1024px;
        margin: 0 auto;
        height: 100%;
        margin-top: 6px;
        background-color: #ffffff;
    }
    .detailsTit{
        font-size: 18px;
        height: 65px;
        line-height: 70px;
        letter-spacing: 1px;
        color: #4d4d4d;
        margin: 0 30px;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 10px;

    }
    .userDetailBox{
        & .userDetail{
            height:100%;
            width: 100%;
            & .userDetailLeft{
                padding: 0 30px;
            }
        }
    }
    /**details left start**/
    .detailLeft{
        width: 100%;
        .userAvatar{
            width: 88px;
            height: 88px;
            border-radius:50%;
            position: relative;
            margin-top: 40px;
            left:50%;
            transform: translate(-50%,0);
            z-index: 1;
            & > img{
               width: 100%;
               height: 100%; 
               border-radius: 50%;
            }
            & > .isMember{
                width: 16px;
                height: 16px;
                position: absolute;
                bottom:-8px;
                left:50%;
                transform: translate(-50%,0);
                z-index:10;
            }
        }
      & .userName{
            font-size: 14px;
            margin-top: 20px;
            margin-bottom: 3px;
            letter-spacing: 0px;
            color: #4c4c4c;
            text-align: center;
      }
      & .userDesc{
            font-size: 12px;
            line-height: 26px;
            color: #808080;
            text-align: center;
      }
     &  .rateBox > .el-row .el-col.el-col-12{
         height: 22px;
         line-height: 22px;
         margin-top: 20px;
         & .beautyValue{
             width: 100%;
             height: 100%;
             border-left: 1px solid #cccccc;
             & .beauty{
                font-size: 12px;
                line-height: 22px;
                color: #808080;
                padding-left: 42px;
                position: relative;
                &::before{
                    content: '';
                    width: 13px;
                    height: 18px;
                    background: url("../assets/img/user/is_active.png") no-repeat;
                    position: absolute;
                    left:20px;

                }
             }
            }
            & .el-rate{
                text-align: right;
                padding-right: 20px;
            }
        }
        &  .rateBox{
            padding-bottom: 59px;
            border-bottom: 1px dashed #cccccc;
        }
        & .basicDetails li{
            width:100%;
            line-height: 54px;
            & .listLeft{
                font-size: 14px;
                letter-spacing: 30px;
                color: #4c4c4c;
                &.module1{
                    letter-spacing:1px;
                    position: relative;
                }
            }
            & .listRight{
                 font-size: 14px;
                 color: #808080;
                 position: relative;
                 & .lookIphone{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translate(0,-50%);
                 }
            }
        &.favorite_brand .grid-content{
            height:40px;
            line-height: 40px;
            margin-top: 10px;
            & img{
                width: 100%;
                height: 100%;
            }
         }
        &.favorite_brand .dashed_line{
            padding-bottom: 49px;
        }
        &.userTag .dashed_line{
            padding-bottom: 20px;
          &  .el-tag{
            margin: 0 4px;
        }  
    }
    &.promotion_proposal .promotion_proposal_list .grid-content.bg-purple{
        text-align: center;
        & img{
            width: 267px;
            height: 120px;
        }
    }
    &.userManager{
        padding-top: 10px;
        padding-bottom: 100px;
        height: 53px;
        & .avatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translate(0,-50%);
        }
        & .userName{
            padding-left: 44px;
            & > em{
                 font-size: 14px;
                 color: #808080;
            }
        }
    }
    }
}
/**details left END**/

/**details right start**/
.userDetailRight{
    & .rightBox{
        text-align: center;
        & .rightMenu{
            margin-top: 29px;
        }
    }
  
}
/** details right END**/
.dashed_line{
     border-bottom: 1px dashed #cccccc;
}
</style>