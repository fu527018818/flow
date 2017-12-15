<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/flowRetention'"></main-nav>
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
  name: "flowRetention" //客流滞留分析
};
</script>

<style scoped>

</style>