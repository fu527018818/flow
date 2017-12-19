<template>
    <div class="app">
        <main-nav :indexMenu="'/statistics/indent'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">

                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
export default {
  components: {MainNav},
  name: "posHistory" //pos录入历史
};
</script>

<style scoped>

</style>