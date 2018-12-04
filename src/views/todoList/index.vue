
<template>
  <div class="todolist">
    <div class="container" style="padding:20px 0px">
      <a class="button is-primary">添加任务</a>
    </div>
    <section class="container"> 
       <div class="tabs">
          <ul>
            <li 
              :class="{ 'is-active':isActive=='nondo' }" 
              @click="isActive='nondo'"><a>待办任务</a> 
              </li>
            <li 
              :class="{ 'is-active':isActive=='end' }" 
              @click="isActive='end'"><a>已处理任务</a>
              </li>
          </ul>
      </div>
      <div class="content">
        <nondo v-if="isActive=='nondo'" />
        <end v-else-if="isActive=='end'" />
      </div>
   </section>
  </div>
</template>

<script type="text/babel">
import nondo from './nondo';
import end from './end';
export default {
  data(){
    return {
      isActive:'nondo'
    }
  },
  components:{
    nondo,
    end,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
</style>
