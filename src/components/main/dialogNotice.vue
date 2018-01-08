<template>
    <el-dialog
        id="dialogNotice"
        title="系统公告"
        :visible.sync="dialogVisible"
        width="60%"
        v-if="notice_title"
        :before-close="handleClose">
            <el-collapse v-model="activeNames">
                <el-collapse-item :name="index" v-for="(item,index) in notice_title" :key="item.id">
                    <template slot="title">
                        <span class="noticeTit">
                            <img v-if="item.flag=='1'?true:false" class="status" src="../../assets/img/noticeFlag.png">
                            {{item.title}}
                        </span>
                        <span style="float:right;padding-right:76px;">{{item.publish_time}}</span>
                    </template>
                    <div class="noticeContent">{{item.content}}</div>
                </el-collapse-item>
                <!-- <el-collapse-item title="【公告】本周日公司组织团建活动" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="【通知】人事变动通知" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item> -->
            </el-collapse>
</el-dialog>

</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return{
                 dialogVisible: true,
                 activeNames: [0]
            }
        },
    computed:{
        ...mapState({
            notice_title:state=>state.main.notice_title
        })
    },
    methods: {
            handleClose(done) {
                    done();
            },
            showNotice(){
                this.dialogVisible= true;
            }
      },
      created(){
          this.$store.dispatch('notice_list',{shop_id:ls.get('shop_list_current'),is_publish:1})
      }
    }
</script>

<style scoped lang="scss">
    .noticeTit{
        display: inline-block;
        position: relative;
        .status{
            position: absolute;
            right:-30px;
            top:5px;
        }
    }
    .noticeContent{
        text-indent: 2em;
    }
</style>